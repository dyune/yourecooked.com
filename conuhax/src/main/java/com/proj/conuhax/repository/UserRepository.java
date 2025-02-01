package com.proj.conuhax.repository;

import com.proj.conuhax.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
