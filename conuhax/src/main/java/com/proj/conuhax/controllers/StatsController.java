package com.proj.conuhax.controllers;

import com.proj.conuhax.models.JobApplication;
import com.proj.conuhax.models.User;
import com.proj.conuhax.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.temporal.WeekFields;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/stats")
public class StatsController {

    @Autowired
    private UserServices userService;  // Automatically inject the UserServices

    @GetMapping("/user/{id}/applications-per-week")
    public ResponseEntity<Map<String, Integer>> getApplicationsPerWeek(@PathVariable Long id) {
        // Fetch the user from the service
        User user = userService.getUserById(id);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        List<JobApplication> jobApplications = userService.getAllJobApplications();

        Map<String, Integer> applicationsPerWeek = new HashMap<>();

        for (JobApplication app : jobApplications) {
            LocalDate applicationDate = app.getDate();

            int weekOfYear = applicationDate.get(WeekFields.ISO.weekOfYear());
            int year = applicationDate.getYear();

            String weekIdentifier = year + "-W" + String.format("%02d", weekOfYear);

            // Increment the count for the specific week
            applicationsPerWeek.put(weekIdentifier, applicationsPerWeek.getOrDefault(weekIdentifier, 0) + 1);
        }

        // Sort the map by week identifier in descending order
        Map<String, Integer> sortedApplicationsPerWeek = applicationsPerWeek.entrySet()
                .stream()
                .sorted((entry1, entry2) -> entry2.getKey().compareTo(entry1.getKey()))  // Descending order
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (e1, e2) -> e1,
                        LinkedHashMap::new  // Ensure insertion order is maintained
                ));

        // Return the sorted applications per week
        return ResponseEntity.ok(sortedApplicationsPerWeek);
    }



    @GetMapping("/applications-most-frequent-companies")
    public ResponseEntity<Map<String, Integer>> getMostFrequentCompanies() {

        List<JobApplication> allJobApplications = userService.getAllJobApplications();

        Map<String, Integer> companiesCount = new HashMap<>();


        for (JobApplication app : allJobApplications) {
            String companyName = app.getCompanyName();

            companyName = companyName.trim().replaceAll("\\s+", " ").toLowerCase();

            companiesCount.put(companyName, companiesCount.getOrDefault(companyName, 0) + 1);
        }

        Map<String, Integer> sortedCompaniesCount = companiesCount.entrySet()
                .stream()
                .sorted((entry1, entry2) -> entry2.getValue().compareTo(entry1.getValue())) // Sort in descending order of counts
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (e1, e2) -> e1,
                        LinkedHashMap::new
                ));

        return ResponseEntity.ok(sortedCompaniesCount);
    }

    @GetMapping("/applications-per-role")
    public ResponseEntity<Map<String, Integer>> getApplicationsPerRole() {

        List<JobApplication> allJobApplications = userService.getAllJobApplications();

        Map<String, Integer> applicationsPerRole = new HashMap<>();

        for (JobApplication app : allJobApplications) {
            String roleName = app.getRoleName();

           roleName = roleName.trim().replaceAll("\\s+", " ").toLowerCase();

            applicationsPerRole.put(roleName, applicationsPerRole.getOrDefault(roleName, 0) + 1);
        }

        Map<String, Integer> sortedApplicationsPerRole = applicationsPerRole.entrySet()
                .stream()
                .sorted((entry1, entry2) -> entry2.getValue().compareTo(entry1.getValue())) // Sort in descending order of counts
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (e1, e2) -> e1,
                        LinkedHashMap::new // Ensure the order is maintained
                ));

        return ResponseEntity.ok(sortedApplicationsPerRole);
    }



}
