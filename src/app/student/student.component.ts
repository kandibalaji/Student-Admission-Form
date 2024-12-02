import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentForm:any;
  students:any;


  constructor(private fb:FormBuilder,private st:StudentService){ 
    this.studentForm=this.fb.group({
      id:[],
      surname:[],
      name: [],
      fathername: [],
      dob:[]
    })
  }
  ngOnInit():void {

    this.st.getAllStudents().subscribe((data)=>{
      this.students=data;
      console.log(data);
    })
  }

  fnAddStudent()
    {
      console.log(this.studentForm.value);
      this.st.addStudent(this.studentForm.value).subscribe((data)=>console.log(data));

    }

    fnUpdateStudent()
    {
      this.st.updateStudent(this.studentForm.value).subscribe((data)=>console.log(data));
    }

    fnDeleteStudent()
    {
      var id=this.studentForm.controls.id.value;
      console.log(id);
      this.st.deleteStudent(id).subscribe((data)=>console.log(data));
    }
}


