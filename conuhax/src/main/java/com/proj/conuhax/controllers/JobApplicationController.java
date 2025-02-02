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
            return ResponseEntity.badRequest().body(null);  // Role name is required
        }


        // Check if the user exists
        User user = userService.getUserById(userId);
        if (user == null) {
            return ResponseEntity.notFound().build();  // Return 404 if user is not found
        }

        // Set the status to "APPLIED" by default
        jobApplication.setStatus(ApplicationStatus.APPLIED);

        // Set the user ID in the job application
        jobApplication.setUserId(userId);

        // Create the job application (saving to DB)
        JobApplication createdJobApplication = jobApplicationService.createJobApplication(jobApplication);

       // Increase the user's points by 1 (because status is "APPLIED")
        user.setPoints(user.getPoints() + 1);  // Increase points by 1
        userService.save(user);  // Save the updated user

        return ResponseEntity.ok(createdJobApplication);  // Return the created job application
    }


    @PatchMapping("/application/{id}")
    public ResponseEntity<JobApplication> updateApplicationStatus(@PathVariable Long id, @RequestBody Map<String, String> updates) {

        JobApplication jobApplication = jobApplicationService.getJobApplicationById(id);
        if (jobApplication == null) {
            return ResponseEntity.notFound().build();
        }

        // Capture the previous status before updating
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

        // Save the updated job application (status change)
        JobApplication updatedJobApplication = jobApplicationService.save(jobApplication);

        // Now update the user's points based on the status change
        jobApplicationService.updateUserPoints(updatedJobApplication, previousStatus, ApplicationStatus.valueOf(status.toUpperCase()));

        return ResponseEntity.ok(updatedJobApplication);
    }

    @DeleteMapping("/application/{id}")
    public ResponseEntity<Void> deleteJobApplication(@PathVariable Long id) {
        JobApplication jobApplication = jobApplicationService.getJobApplicationById(id);
        if (jobApplication == null) {
            return ResponseEntity.notFound().build();  // If the job application doesn't exist
        }

        jobApplicationService.deleteJobApplication(id);  // Call the delete service method
        return ResponseEntity.noContent().build();  // Successfully deleted
    }



}