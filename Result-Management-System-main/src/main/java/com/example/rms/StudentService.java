package com.example.rms;

import java.util.List;

public interface StudentService {
	StudentDto createStudent(StudentDto studentDto);
	StudentDto getStudentById(Long studentId);
	StudentDto getStudentByRollno(String rollno);
	List<StudentDto> getAllStudents();
	StudentDto updateStudent(Long studentId,StudentDto updatedStudent);
	void deleteStudent(Long studentId);
}
