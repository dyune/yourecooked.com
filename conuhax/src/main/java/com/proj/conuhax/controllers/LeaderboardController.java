package com.proj.conuhax.controllers;

import com.proj.conuhax.models.User;
import com.proj.conuhax.services.LeaderboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/leaderboard")
public class LeaderboardController {

    private final LeaderboardService leaderboardService;

    @Autowired
    public LeaderboardController(LeaderboardService leaderboardService) {
        this.leaderboardService = leaderboardService;
    }

    @GetMapping("/rankings")
    public ResponseEntity<List<User>> getLeaderboard() {
        List<User> rankedUsers = leaderboardService.getRankedUsers();
        return ResponseEntity.ok(rankedUsers);
    }
}