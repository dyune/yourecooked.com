package com.proj.conuhax.repositories;

import com.proj.conuhax.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u JOIN FETCH u.jobApplications WHERE u.username = :username")
    User findByUsername(@Param("username") String username);

    @Query("SELECT u FROM User u JOIN FETCH u.jobApplications WHERE u.email = :email")
    User findByEmail(@Param("email") String email);
}
