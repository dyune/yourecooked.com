package com.proj.conuhax.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.web.bind.annotation.PostMapping;

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

    @Column(nullable = true)
    private String description;

    @Column(nullable = false)
    private String roleName;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User owner;

}
