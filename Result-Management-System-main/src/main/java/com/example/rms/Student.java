package com.example.rms;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name="student")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="rollno",nullable=false)
	private String rollno;
	@Column(name="name")
	private String name;
	@Column(name="email",nullable=false,unique=true)
	private String email;
	public Long getId() {
		return id;
	}
	@OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Mark> marks;
	
	public List<Mark> getMarks() {
		return marks;
	}
	public void setMarks(List<Mark> marks) {
		this.marks = marks;
	}
	//	public void setId(Long id) {
//		this.id = id;
//	}
	public String getRollno() {
		return rollno;
	}
	public void setRollno(String rollno) {
		this.rollno = rollno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Student(Long id, String rollno, String name, String email) {
		super();
		this.id = id;
		this.rollno = rollno;
		this.name = name;
		this.email = email;
	}
	public Student() {
		super();
	}
	
	
}
