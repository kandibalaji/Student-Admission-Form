import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {

  baseUrl='http://localhost:8080';

  constructor(private http:HttpClient) { }

  getAllEmployees()
  {
    return this.http.get(this.baseUrl+'/get');
  }
  // findEmployeeById(id:any)
  // {
  //   return this.http.get(this.baseUrl+"/get"+id); 
  // }
  addEmployee(employee:any)
  {
    return this.http.post(this.baseUrl+'/add',employee);
  }
  // updateEmployee(employee:any)
  // {
  //   return this.http.put(this.baseUrl+'/update/'+employee.id,employee);
  // }
  deleteEmployee(id:any)
  {
    return this.http.delete(this.baseUrl+"/delete/"+id);
  }


}
