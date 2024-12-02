import { Component,ContentChild,ContentChildren,ElementRef,EventEmitter,Input,Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChild('head') data1:ElementRef;
  @ContentChildren('head') data2:ElementRef;
  @Input()studentData;
@Input() pMan;
@Output() pass=new EventEmitter();


data='this message is from component';

sendData(){
  this.pass.emit(this.data);
}
constructor()
{
   console.log("this is constructor");
}
ngOnchanges(changes:SimpleChanges)
{
  console.log(changes);
  console.log("this is ngOnchanges");
}
// ngOnInIt()
// {
//   console.log("this is hook");
// }

  ngDoCheck()
  {
console.log(this.studentData);
  }
}