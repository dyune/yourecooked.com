package com.proj.conuhax.services;

import com.proj.conuhax.models.ApplicationStatus;
import com.proj.conuhax.models.JobApplication;
import com.proj.conuhax.models.User;
import com.proj.conuhax.repositories.JobApplicationRepository;
import org.springframework.stereotype.Service;

@Service
public class JobApplicationServices {

    private final JobApplicationRepository jobApplicationRepository;
    private final UserServices userService;

    public JobApplicationServices(JobApplicationRepository jobApplicationRepository, UserServices userService) {
        this.jobApplicationRepository = jobApplicationRepository;
        this.userService = userService;
    }

    public JobApplication createJobApplication(JobApplication jobApplication) {
        if (jobApplication.getStatus() == null) {
            jobApplication.setStatus(ApplicationStatus.APPLIED);
        }

        JobApplication createdJobApplication = jobApplicationRepository.save(jobApplication);

        ApplicationStatus currentStatus = jobApplication.getStatus();
        // Update user points when the job application is created
        updateUserPoints(jobApplication, currentStatus);

        return createdJobApplication;
    }

    public JobApplication save(JobApplication jobApplication, ApplicationStatus currentStatus) {
        JobApplication updatedJobApplication = jobApplicationRepository.save(jobApplication);


        updateUserPoints(jobApplication, currentStatus );

        return updatedJobApplication;
    }

    private void updateUserPoints(JobApplication jobApplication, ApplicationStatus currentStatus) {
        User user = userService.getUserById(jobApplication.getUserId()); // Fetch user by jobApplication's userId
        if (user != null) {
            int pointsToAdd = getPointsForStatus(jobApplication.getStatus());
            int currentPoints = user.getPoints();
            user.setPoints(currentPoints + pointsToAdd); // Add points based on status
            userService.save(user); // Save the updated user
        }
    }

    private int getPointsForStatus(ApplicationStatus status) {
        switch (status) {
            case APPLIED:
                return 1;
            case REJECTED:
                return 0;
            case INTERVIEWED:
                return 3;
            case OFFERED:
                return 10;
            default:
                return 0;
        }
    }

    public JobApplication getJobApplicationById(Long id) {
        return jobApplicationRepository.findById(id).orElse(null);
    }
}
