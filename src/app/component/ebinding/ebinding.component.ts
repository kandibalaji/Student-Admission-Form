import { Component } from '@angular/core';

@Component({
  selector: 'app-ebinding',
  templateUrl: './ebinding.component.html',
  styleUrls: ['./ebinding.component.css']
})
export class EbindingComponent {
send(event){
  console.log(event)
}
}
