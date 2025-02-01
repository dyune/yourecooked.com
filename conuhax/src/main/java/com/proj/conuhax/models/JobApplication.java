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

    private String companyName;

    private String roleName;

    // private Comment comments; might do this later

}
