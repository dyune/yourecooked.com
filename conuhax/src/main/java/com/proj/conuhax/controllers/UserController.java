package com.proj.conuhax.controllers;

import com.proj.conuhax.exceptions.ResourceNotFoundException;
import com.proj.conuhax.models.User;
import com.proj.conuhax.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserServices userService;

    @GetMapping("user/{id}")
    public User getUser(@PathVariable Long id) {
        User user = userService.getUserById(id);
        if (user == null) {
            throw new ResourceNotFoundException("User not found");
        }
        return user;
    }

    @PostMapping("user/create")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}
