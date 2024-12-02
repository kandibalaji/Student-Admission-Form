import { Component } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent {
     mytext="textcolor";
     mygroup={
      'textcolor':false,
      'textsize':true
     }
     isrequired=true;
          constructor()
          {
            console.log("this is constructor");
          }
          ngOnInit()
          {
            console.log("this is ngOnInit");
          }
}
