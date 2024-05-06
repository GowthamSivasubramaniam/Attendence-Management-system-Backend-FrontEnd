package com.example.rms;

public class MarkMapper {
	public static MarkDto mapToMarkDto(Mark mark) {
		return new MarkDto(mark.getId(),mark.getMonth(),mark.getDays(),mark.getYear());
	}
	
	public static Mark mapToMark(MarkDto mark) {
		return new Mark(mark.getId(),mark.getMonth(),mark.getDays(),mark.getYear());
	}
}
