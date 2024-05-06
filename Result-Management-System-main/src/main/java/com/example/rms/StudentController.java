package com.example.rms;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("api/student")
public class StudentController {
	private StudentService studentService;
	
	public StudentController(StudentService studentService) {
		super();
		this.studentService = studentService;
	}
	
	
	@PostMapping
	public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto){
	
		StudentDto savedStudent=studentService.createStudent(studentDto);
		return new ResponseEntity<>(savedStudent,HttpStatus.CREATED);
	}
	
	@GetMapping("id/{id}")
	public ResponseEntity<StudentDto> getStudentById(@PathVariable("id") Long studentId){
		StudentDto studentDto=studentService.getStudentById(studentId);
		return ResponseEntity.ok(studentDto);
	}
	
	@GetMapping("/rollno/{rollno}")
	public ResponseEntity<StudentDto> getStudentByRollno(@PathVariable("rollno") String rollno){
		StudentDto studentDto=studentService.getStudentByRollno(rollno);
		return ResponseEntity.ok(studentDto);
	}
	
	@GetMapping 
	public ResponseEntity<List<StudentDto>> getAllStudents(){
		List<StudentDto> students=studentService.getAllStudents();
		return ResponseEntity.ok(students);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<StudentDto> updateStudent(@PathVariable("id") Long studentId,@RequestBody StudentDto studentDto){
		StudentDto upStudentDto=studentService.updateStudent(studentId, studentDto);
		return ResponseEntity.ok(upStudentDto);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteStudent(@PathVariable("id") Long studentId){
		studentService.deleteStudent(studentId);
		return ResponseEntity.ok("Student deleted Successfully!.. ");
	}
	
}
