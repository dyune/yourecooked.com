package com.proj.conuhax.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status;

    @Column(nullable = false)
    private String companyName;

    @Column(nullable = false)
    private String roleName;

    // This field indicates the owner of the job application.
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User owner;

    // You can add additional associations or fields later, e.g., comments.
}
