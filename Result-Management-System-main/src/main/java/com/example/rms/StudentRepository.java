package com.example.rms;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long>{
	Optional<Student> findByRollno(String rollno);
}
