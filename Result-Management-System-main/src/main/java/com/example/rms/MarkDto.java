package com.example.rms;

import java.util.List;

public class MarkDto {
	private Long id;
    private String month;
    private String days;
    private String year;

	public MarkDto(Long id, String month, String days , String year) {
		super();
		this.id = (long)1;
		this.month = month;
		this.days = days;
		this.year= year;
	}
	public MarkDto() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
