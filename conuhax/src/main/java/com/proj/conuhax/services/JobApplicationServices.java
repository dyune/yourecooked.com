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
        updateUserPoints(jobApplication, null);  // No previous status for a new application

        return createdJobApplication;
    }

    public JobApplication save(JobApplication jobApplication) {
        JobApplication updatedJobApplication = jobApplicationRepository.save(jobApplication);
        return updatedJobApplication;
    }


    public void updateUserPoints(JobApplication jobApplication, ApplicationStatus previousStatus) {
        User user = userService.getUserById(jobApplication.getUserId());
        if (user != null) {
            int previousPoints = user.getPoints();
            int currentPoints = getPointsForStatus(jobApplication.getStatus());

            if(currentPoints ==0){
                return;
            }
            if(currentPoints < previousPoints){

                user.setPoints(user.getPoints() - (previousPoints - currentPoints));
                userService.save(user);
                return;
            }
            user.setPoints(user.getPoints() + (currentPoints - previousPoints));
            userService.save(user);



            // Save the updated user
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
