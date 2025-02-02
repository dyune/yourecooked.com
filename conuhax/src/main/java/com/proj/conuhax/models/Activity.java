package com.proj.conuhax.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="activities")
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String activityName;

    @Column(nullable = false)
    private ApplicationStatus status;

    @Column(nullable = false)
    private LocalDate date;

}
