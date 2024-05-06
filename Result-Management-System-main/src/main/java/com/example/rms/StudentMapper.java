package com.example.rms;

import java.util.List;
import java.util.stream.Collectors;

public class StudentMapper {
	public static StudentDto mapToStudentDto(Student student) {
		StudentDto st= new StudentDto(student.getId(),student.getRollno(),student.getName(),student.getEmail());
		List<MarkDto> markDtos = student.getMarks().stream()
	            .map((mark)->MarkMapper.mapToMarkDto(mark))
	            .collect(Collectors.toList());

	    st.setMarks(markDtos);
		return st;
	}
	public static Student mapToStudent(StudentDto studentDto) {
		Student st= new Student(studentDto.getId(),studentDto.getRollno(),studentDto.getName(),studentDto.getEmail());
		List<Mark> mark = studentDto.getMarks().stream()
	            .map((markDto)->MarkMapper.mapToMark(markDto))
	            .collect(Collectors.toList());

	    st.setMarks(mark);
		return st;
	}
}
