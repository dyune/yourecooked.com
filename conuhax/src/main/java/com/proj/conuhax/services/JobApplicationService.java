package com.proj.conuhax.services;

import com.proj.conuhax.models.JobApplication;
import com.proj.conuhax.repository.JobApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.proj.conuhax.models.ApplicationStatus;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    public JobApplication createJobApplication(JobApplication jobApplication) {
        // Set default values for fields if necessary, like status
        if (jobApplication.getStatus() == null) {
            jobApplication.setStatus(ApplicationStatus.APPLIED);  // Example default status
        }

        return jobApplicationRepository.save(jobApplication);
    }
}