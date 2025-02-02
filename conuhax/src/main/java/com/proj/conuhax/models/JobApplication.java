package com.proj.conuhax.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status;

    @Column(nullable = false)
    private String companyName;

    @Column(nullable = true)
    private String description;

    @Column(nullable = false)
    private String roleName;

    @Column(name = "user_id")
    private Long user_id;

    @Column(nullable = false)
    private LocalDate date;

    // Other getters and setters

    // Automatically set the date to NOW when the object is created
    @PrePersist
    public void setDate() {
        if (this.date == null) {
            this.date = LocalDate.now();  // Sets date to current date when the entity is persisted
        }
    }

    public void setUserId(Long userId) {
        this.user_id = userId;
    }

    public ApplicationStatus getStatus() {
        return this.status;
    }

    public void setStatus(ApplicationStatus applicationStatus) {
        this.status = applicationStatus;
    }

    public String getCompanyName() {
        return this.companyName;
    }

    public String getRoleName() {
        return this.roleName;
    }
    // killl meeeee
    public String getDescription() {
        return this.description;
    }

    public Long getUserId() {
        return this.user_id;
    }

    public Long getId() {
        return this.id;
    }

}
