package com.proj.conuhax.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.proj.conuhax.models.ApplicationStatus;


@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
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

    // There is no reference to User here.
    // The owner_id foreign key will be automatically set based on the User entity's mapping.

    // If needed, you could also store other user-related information such as email, but that
    // would be just duplicative data.
    @Column(name = "user_email")
    private String userEmail;

}
