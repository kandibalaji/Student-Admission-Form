package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Student;
import com.example.demo.Service.Serviceinterface;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class Mycontroller {
	@Autowired
	private Serviceinterface servs;
	@GetMapping("/get")
	public List<Student> getStudents()
	{
		return servs.getStudents();
	}
	@GetMapping("/get/{id}")
	public Student getStudent(@PathVariable long id)
	{
		return servs.getStudent(id);
	}
	@PostMapping("/save")
	public Student saveStudent(@RequestBody Student stu)
	{
		return servs.CreateStudent(stu);
	}
	@PutMapping("/update/{id}")
	public Student updateStudent(@PathVariable long id,@RequestBody Student stu)
	{
		return servs.UpdateStudents(stu,id);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteStudent(@PathVariable long id)
	{
		servs.deleteStudent(id);
		return new ResponseEntity<String>("Employee Deleted Successfully",HttpStatus.OK);
	}

}
