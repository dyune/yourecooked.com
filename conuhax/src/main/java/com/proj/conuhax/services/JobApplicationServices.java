package com.proj.conuhax.services;

import com.proj.conuhax.models.ApplicationStatus;
import com.proj.conuhax.models.JobApplication;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

@Service
public class JobApplicationServices {

    public JobApplication createJobApplication(JobApplication jobApplication) {
        if (jobApplication.getStatus() == null) {
            jobApplication.setStatus(ApplicationStatus.APPLIED);
        }
        return jobApplication;
    }
}
