import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructo() { }




  public getcourse()

{
  return[
    {id:1,name:"java",duration:"3 months",fee:25000},
    {id:2,name:"angualr",duration:"2 months",fee:20000},
    {id:3,name:"react js",duration:"1 month",fee:15000},
    {id:4,name:"Html/css",duration:"15 days",fee:10000},
    {id:5,name:"js",duration:"10 days",fee:5000}
  ];

}
}
