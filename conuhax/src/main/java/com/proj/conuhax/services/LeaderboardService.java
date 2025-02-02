package com.proj.conuhax.services;

import com.proj.conuhax.models.User;
import com.proj.conuhax.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LeaderboardService {

    private final UserRepository userRepository;

    @Autowired
    public LeaderboardService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getRankedUsers() {
        return userRepository.findAll()
                .stream()
                .sorted((u1, u2) -> Integer.compare(u2.getPoints(), u1.getPoints()))
                .collect(Collectors.toList());
    }
}
