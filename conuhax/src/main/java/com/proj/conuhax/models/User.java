package com.proj.conuhax.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private String school;

    @Column(unique = true)
    private String username;

    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    // The User knows about its JobApplications.
    // This unidirectional one-to-many mapping tells JPA to store the foreign key (owner_id)
    // in the job_applications table. Note that JobApplication does not have any reference to User.
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "owner_id") // This column will be added to the job_applications table.
    private List<JobApplication> jobApplications = new ArrayList<>();

}
