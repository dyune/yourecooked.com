package com.proj.conuhax.repository;

import org.springframework.data.jpa.repository.Query;
import com.proj.conuhax.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.username = :username")
    User findByUsername(String username);

    User findByEmail(String email);

}