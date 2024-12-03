package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Student;
import com.example.demo.Repository.Myrepository;

@Service
public class Serviceimpl implements Serviceinterface {
	@Autowired
	private Myrepository repo;

	@Override
	public List<Student> getStudents() {
		return repo.findAll();
	}

	@Override
	public Student getStudent(long id) {
		return repo.findById(id).get();
	}

	@Override
	public Student CreateStudent(Student stu) {
		return repo.save(stu);
		
	}

	@Override
	public Student UpdateStudents(Student stu, long id) {
		Student stu1=repo.findById(id).get();
		stu1.setSurname(stu.getSurname());
		stu1.setName(stu.getName());
		stu1.setFathername(stu.getFathername());
		stu1.setDOB(stu.getDOB());
		repo.save(stu1);
		return stu1;
	}

	@Override
	public void deleteStudent(long id) {
		repo.deleteById(id);
		
	}
}
