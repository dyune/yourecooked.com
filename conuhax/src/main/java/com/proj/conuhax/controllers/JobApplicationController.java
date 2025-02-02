package com.proj.conuhax.controllers;

import com.proj.conuhax.models.JobApplication;
import com.proj.conuhax.models.User;
import com.proj.conuhax.services.JobApplicationService;
import com.proj.conuhax.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping()
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;

    @Autowired
    private UserService userService;

    @PostMapping("/user/{userId}/application")
    public ResponseEntity<JobApplication> createJobApplication(@PathVariable Long userId, @RequestBody JobApplication jobApplication) {
        // Fetch the user by their ID
        User user = userService.getUserById(userId);

        if (user == null) {
            return ResponseEntity.notFound().build();  // Return 404 if the user doesn't exist
        }

        // Assign the user to the job application
        jobApplication.setUserEmail(user.getEmail());

        // Create and save the job application
        JobApplication createdJobApplication = jobApplicationService.createJobApplication(jobApplication);
        return ResponseEntity.ok(createdJobApplication);  // Return the created job application
    }
}