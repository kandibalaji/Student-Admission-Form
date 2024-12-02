import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { EmployeeRegistrationService } from '../employee-registration.service'; 

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
employeeRegistrationForm: any;
employees:any;


constructor(private fb:FormBuilder,private er:EmployeeRegistrationService){ 
  this.employeeRegistrationForm=this.fb.group({
      id:[],
     email: [],
    password:[]
    
  })
}
ngOnInit():void {

  this.er.getAllEmployees().subscribe((data)=>{
    this.employees=data;
    console.log(data);
  })
}

fnAddEmployee()
{
  console.log(this.employeeRegistrationForm.value);
  this.er.addEmployee(this.employeeRegistrationForm.value).subscribe((data)=>console.log(data));

}

fnDeleteEmployee()
{
  var id=this.employeeRegistrationForm.controls.id.value;
      console.log(id);
      this.er.deleteEmployee(id).subscribe((data)=>console.log(data));
}


}
