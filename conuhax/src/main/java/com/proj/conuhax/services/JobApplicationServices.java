package com.proj.conuhax.services;

import com.proj.conuhax.models.ApplicationStatus;
import com.proj.conuhax.models.JobApplication;
import com.proj.conuhax.repositories.JobApplicationRepository;
import org.springframework.stereotype.Service;

@Service
public class JobApplicationServices {

    private final JobApplicationRepository jobApplicationRepository;

    public JobApplicationServices(JobApplicationRepository jobApplicationRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
    }

    public JobApplication createJobApplication(JobApplication jobApplication) {
        // Default status to APPLIED if not already set
        if (jobApplication.getStatus() == null) {
            jobApplication.setStatus(ApplicationStatus.APPLIED);
        }
        return jobApplicationRepository.save(jobApplication);  // Save the job application
    }
}
