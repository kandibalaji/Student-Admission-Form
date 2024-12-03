package com.example.demo.Entity;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Version;

@Entity
@Table(name="Student_Admission_form")
public class Student {
	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	@Column(name="Student_id")
	private long id;
	@Column(name="Student_surname")
	private String surname;
	@Column(name="Student_name")
	private String name;
	@Column(name="Student_fathername")
	private String fathername;
	@Column(name="Student_DOB")
	private String DOB;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getFathername() {
		return fathername;
	}
	public void setFathername(String fathername) {
		this.fathername = fathername;
	}
	public String getDOB() {
		return DOB;
	}
	public void setDOB(String dOB) {
		DOB = dOB;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", surname=" + surname + ", name=" + name + ", fathername=" + fathername + ", DOB="
				+ DOB + "]";
	}
	

}
