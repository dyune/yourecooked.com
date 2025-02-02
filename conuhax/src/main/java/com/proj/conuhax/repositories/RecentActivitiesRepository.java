package com.proj.conuhax.repositories;

import com.proj.conuhax.models.Activity;
import com.proj.conuhax.models.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RecentActivitiesRepository extends JpaRepository<JobApplication, Long> {

    @Query("SELECT a FROM Activity a ORDER BY a.date DESC LIMIT 5")
    List<Activity> findTop5ByOrderByDateDesc();

}
