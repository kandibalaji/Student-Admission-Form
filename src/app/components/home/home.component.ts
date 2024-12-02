import { Component, ElementRef, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  public name:String="coding hub innovations";

  @ViewChild('para') para:ElementRef;
  @ViewChildren('heading') head:HTMLHeadingElement[];

constructor()
{
  console.log("this is constructor");
}
ngOnChanges(changes:SimpleChanges)
{
  console.log("this is home component");
}
ngOnInit()
{


  let p = new Promise((resolve,reject)=>
    
  {
    console.log("this is promise");
    resolve('this is success response');
    reject('this is failure reject');
    
  });
  p.then(
    (s)=>{
      console.log(s);
      console.log("success");
    },
    
      (f)=>{
        console.log(f);
        console.log("failure");
      }
    );
  
  //console.log("this is ngOnInit");

  let o = new Observable((response)=>{
    console.log("this is observable");
    response.next('this is response1');
    response.next('this is response2');
    response.next('this is response3');
    response.next('this is response4');
    response.next('this is response5');
    response.next('this is response6');
  });
  o.subscribe(
    (s)=>{
      console.log(1);
      console.log(s);
    },
    (f)=>{
      console.log(2);
      console.log(f);
    },
    ()=>
    {
      console.log("completed");
    }
  )


}
ngAfterViewInit()
{
  console.log(this.para?.nativeElement?.innerText)
}




// test()
// {
//   console.log(this.para.nativeElement.innerText)
// }
// click()
// {
//   for(let e of this.head)
//   console.log(e.nativeElement.innerText)
// }
}
