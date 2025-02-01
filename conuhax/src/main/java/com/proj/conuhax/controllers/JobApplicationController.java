package com.proj.conuhax.controllers;

import com.proj.conuhax.models.JobApplication;
import com.proj.conuhax.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JobApplicationController {

    private UserRepository userRepository;

//    @GetMapping("{userId}/application/{applicationId}")
//    public JobApplication getJobApplication(@PathVariable Long userId, @PathVariable Long applicationId) {
//        JobApplication application;
//
//    }

}
