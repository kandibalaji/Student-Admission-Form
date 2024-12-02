import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl='http://localhost:8080';

  constructor(private http:HttpClient) { }

  getAllStudents()
  {
    return this.http.get(this.baseUrl+'/get');
  }
  findStudentById(id:any)
  {
    return this.http.get(this.baseUrl+"/get"+id); 
  }
  addStudent(student:any)
  {
    return this.http.post(this.baseUrl+'/save',student);
  }
  updateStudent(student:any)
  {
    return this.http.put(this.baseUrl+'/update/'+student.id,student);
  }
  deleteStudent(id:any)
  {
    return this.http.delete(this.baseUrl+"/delete/"+id);
  }
}
