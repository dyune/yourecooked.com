package com.proj.conuhax.controllers;

import com.proj.conuhax.models.User;
import com.proj.conuhax.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("user/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);  // This returns the user or null if not found
    }

    @PostMapping("user/create")
    public User createUser(@RequestBody User user) {
        // Delegate user creation logic to UserService
        return userService.createUser(user);  // Saves the user and returns the saved user object
    }
}
