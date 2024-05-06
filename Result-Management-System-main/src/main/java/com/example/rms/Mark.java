package com.example.rms;

import java.util.List;


import org.springframework.context.annotation.Lazy;

import jakarta.persistence.*;

@Entity
@Table(name="Attendence")
public class Mark {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="Month")
	private String month;
	@Column(name="Days")
	private String days;
	@Column(name="Year")
	private String year;
	
	@ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
		
	public Mark() {
		super();
	}
	public Mark(Long id,String month, String days, String year) {
		super();
		this.id=id;
		this.month = month;
		this.days = days;
		this.year=year;
	}
	public Long getId() {
		return id;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getDays() {
		return days;
	}
	public void setDays(String days) {
		this.days = days;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
}
