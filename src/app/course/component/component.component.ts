import { Component } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {

  constructor(private _cService:CourseService){

  }
  courses = this._cService.getcourse();






  // ngOnDestroy()
  // {
  //   console.log("this is ngOnDestroy");
  // }


}
