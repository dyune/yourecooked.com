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

    public JobApplication save(JobApplication jobApplication) {
        JobApplication updatedJobApplication = jobApplicationRepository.save(jobApplication);
        return updatedJobApplication;
    }


    public JobApplication createJobApplication(JobApplication jobApplication) {
        if (jobApplication.getStatus() == null) {
            jobApplication.setStatus(ApplicationStatus.APPLIED); // Ensure the status is never null
        }

        JobApplication createdJobApplication = jobApplicationRepository.save(jobApplication);


        return createdJobApplication;
    }

    public void updateUserPoints(JobApplication jobApplication, ApplicationStatus previousStatus, ApplicationStatus newStatus) {
        User user = userService.getUserById(jobApplication.getUserId());
        int prevStatPts = getPointsForStatus(previousStatus);
        if (user != null) {
            int newPoints = getPointsForStatus(newStatus);
            if (newPoints!= 0) {
                user.setPoints(user.getPoints() + newPoints - prevStatPts); // Add or subtract the difference
                userService.save(user);
            }
        }
    }



    public void deleteJobApplication(Long id) {
        JobApplication jobApplication = jobApplicationRepository.findById(id).orElse(null);


        if (jobApplication != null) {
            int pointsToRemove = getPointsForStatus(jobApplication.getStatus());
            User user = userService.getUserById(jobApplication.getUserId());
            user.setPoints(user.getPoints() - pointsToRemove);
            jobApplicationRepository.delete(jobApplication);
        }
    }

    // Method to subtract the points associated with the application status
    private void removeUserPoints(JobApplication jobApplication) {
        User user = userService.getUserById(jobApplication.getUserId());
        if (user != null) {
            int pointsToRemove = getPointsForStatus(jobApplication.getStatus());
            user.setPoints(user.getPoints() - pointsToRemove);
            userService.save(user);
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
