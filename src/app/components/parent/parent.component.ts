import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ParentComponent {


  @ViewChild(ChildComponent) vchild;
  sData={id:1,name:'syed',roll:'student'};
msg="this is parent to child component";
res;
  
receivemsg(msg)
{
  this.res=msg;
}
updatemsg()
{




  console.log(this.vchild?.sdata);
  // this.msg= ( "this message is from parent component" +  this.i++);
  // console.log(this.i);
  this.sData = {id:1,name:'syed',roll:'student'};
}

}
