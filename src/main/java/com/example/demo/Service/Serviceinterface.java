package com.example.demo.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.Entity.Student;

public interface Serviceinterface {
	
	public List<Student> getStudents();
	
	public Student getStudent(long id);
	
	public Student CreateStudent(Student stu);
	
	public Student UpdateStudents(Student stu,long id);
	
	public void deleteStudent(long id);
	

}
