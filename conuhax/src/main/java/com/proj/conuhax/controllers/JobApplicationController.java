package com.proj.conuhax.controllers;

import com.proj.conuhax.models.ApplicationStatus;
import com.proj.conuhax.models.JobApplication;
import com.proj.conuhax.models.User;
import com.proj.conuhax.services.JobApplicationServices;
import com.proj.conuhax.services.UserServices;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping()
public class JobApplicationController {

    private final JobApplicationServices jobApplicationService;
    private final UserServices userService;


    public JobApplicationController(JobApplicationServices jobApplicationService, UserServices userService) {
        this.jobApplicationService = jobApplicationService;
        this.userService = userService;

    }

    @PostMapping("/user/{userId}/application")
    public ResponseEntity<JobApplication> createJobApplication(
            @PathVariable Long userId, @RequestBody JobApplication jobApplication) {

        // Validate required fields
        if (jobApplication.getCompanyName() == null || jobApplication.getCompanyName().isEmpty()) {
            return ResponseEntity.badRequest().body(null);  // Company name is required
        }
        if (jobApplication.getRoleName() == null || jobApplication.getRoleName().isEmpty()) {
            return ResponseEntity.badRequest().body(null);
        }
        User user = userService.getUserById(userId);
        if (user == null) {
            return ResponseEntity.notFound().build();  // Return 404 if user is not found
        }

        jobApplication.setStatus(ApplicationStatus.APPLIED);
        jobApplication.setUserId(userId);

        try {
            JobApplication createdJobApplication = jobApplicationService.createJobApplication(jobApplication);
            user.setPoints(user.getPoints() + 1);
            userService.save(user);
            return ResponseEntity.ok(createdJobApplication);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }



    }


    @PatchMapping("/application/{id}")
    public ResponseEntity<JobApplication> updateApplicationStatus(@PathVariable Long id, @RequestBody Map<String, String> updates) {

        JobApplication jobApplication = jobApplicationService.getJobApplicationById(id);
        if (jobApplication == null) {
            return ResponseEntity.notFound().build();
        }

        ApplicationStatus previousStatus = jobApplication.getStatus();

        String status = updates.get("status");
        if (status != null) {
            try {
                // Update status
                ApplicationStatus newStatus = ApplicationStatus.valueOf(status.toUpperCase());
                jobApplication.setStatus(newStatus);

            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().body(null);  // Invalid status
            }
        }

        JobApplication updatedJobApplication = jobApplicationService.save(jobApplication);

        jobApplicationService.updateUserPoints(updatedJobApplication, previousStatus, ApplicationStatus.valueOf(status.toUpperCase()));

        return ResponseEntity.ok(updatedJobApplication);
    }

    @DeleteMapping("/application/{id}")
    public ResponseEntity<Void> deleteJobApplication(@PathVariable Long id) {
        JobApplication jobApplication = jobApplicationService.getJobApplicationById(id);
        if (jobApplication == null) {
            return ResponseEntity.notFound().build();
        }

        jobApplicationService.deleteJobApplication(id);
        return ResponseEntity.noContent().build();
    }



}