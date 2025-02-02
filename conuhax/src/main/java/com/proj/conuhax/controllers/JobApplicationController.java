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

        // Add this for debugging

        // Validate required fields
        if (jobApplication.getCompanyName() == null || jobApplication.getCompanyName().isEmpty()) {
            return ResponseEntity.badRequest().body(null);  // Company name is required
        }

        if (jobApplication.getRoleName() == null || jobApplication.getRoleName().isEmpty()) {
            return ResponseEntity.badRequest().body(null);  // Role name is required
        }

        // Check if the user exists
        User user = userService.getUserById(userId);
        if (user == null) {
            return ResponseEntity.notFound().build();  // Return 404 if user is not found
        }

        // Set the user ID in the job application and create the application
        jobApplication.setUserId(userId);
        JobApplication createdJobApplication = jobApplicationService.createJobApplication(jobApplication);

        return ResponseEntity.ok(createdJobApplication);  // Return the created job application
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
                ApplicationStatus newStatus = ApplicationStatus.valueOf(status.toUpperCase());
                jobApplication.setStatus(newStatus);
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().body(null);
            }
        }


        JobApplication updatedJobApplication = jobApplicationService.save(jobApplication);


        jobApplicationService.updateUserPoints(jobApplication, previousStatus);

        return ResponseEntity.ok(updatedJobApplication);
    }


}
