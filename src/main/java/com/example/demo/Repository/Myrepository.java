package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Student;

@Repository
public interface Myrepository extends JpaRepository<Student,Long> {
	public void deleteById(long id);

}
