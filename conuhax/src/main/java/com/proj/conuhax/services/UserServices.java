package com.proj.conuhax.services;

import com.proj.conuhax.models.JobApplication;
import com.proj.conuhax.models.User;
import com.proj.conuhax.repositories.JobApplicationRepository;
import com.proj.conuhax.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServices {

    private final UserRepository userRepository;
    private final JobApplicationRepository jobApplicationRepository;

    public UserServices(UserRepository userRepository, JobApplicationRepository jobApplicationRepository) {
        this.userRepository = userRepository;
        this.jobApplicationRepository = jobApplicationRepository;
    }

    // Method to fetch user by ID
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null); // Returns null if the user does not exist
    }

    // Method to save or create a user
    public User save(User user) {
        return userRepository.save(user); // This will create a new user or update an existing one
    }

    // Other methods related to user operations
    public int calculateUserPoints(User user) {
        return user.getPoints();  // Assuming the user has a 'points' field
    }

    public int calculateOfferApplicationRatio(User user) {
        // Your logic for calculating offer application ratio
        return 0;
    }

    public List<JobApplication> getAllJobApplications() {
        return jobApplicationRepository.findAll();
    }
    public User createUser(User user) {
        // Perform any validation or preprocessing on the user object if needed
        return userRepository.save(user); // Save the user to the database
    }

}
