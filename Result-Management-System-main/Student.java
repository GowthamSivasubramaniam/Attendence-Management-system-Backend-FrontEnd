package com.example.rms.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="student")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="rollno",nullable=false,unique = true)
	private String rollno;
	@Column(name="name")
	private String name;
	@Column(name="email",nullable=false,unique = true)
	private String email;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Student(Long id, String rollno, String name, String email) {
		super();
		this.id = id;
		this.rollno = rollno;
		this.name = name;
		this.email = email;
	}
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
	

}
