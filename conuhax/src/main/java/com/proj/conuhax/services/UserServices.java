package com.proj.conuhax.services;

import com.proj.conuhax.models.User;
import com.proj.conuhax.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices {

    @Autowired
    private UserRepository userRepository;

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);  // Returns null if not found
    }

    public User createUser(User user) {
        // You can add more validation logic here if needed (e.g., checking if the user already exists)
        return userRepository.save(user);  // Save and return the user object
    }

    public int calculateUserPoints(User user) {

        // Need to retrieve all activities in the database.

        return 0;
    }

    public int calculateOfferApplicationRatio(User user) {

        // Get number of Offers and number of Applications

        return 0;
    }

}
