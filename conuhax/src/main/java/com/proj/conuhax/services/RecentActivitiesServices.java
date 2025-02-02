package com.proj.conuhax.services;

import com.proj.conuhax.models.Activity;
import com.proj.conuhax.repositories.RecentActivitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecentActivitiesServices {

    @Autowired
    public RecentActivitiesRepository recentActivitiesRepository;

    public Activity retrieveRecentActivities(int count) {
        RecentActivitiesRepository repository = recentActivitiesRepository;
        return null;
    }
}

