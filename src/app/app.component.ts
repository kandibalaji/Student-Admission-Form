import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friend';
  public a:boolean=true;//defaulty tasks available
  private b:number=34;
  public c:String="balaji";
  f:any="bfjdb";//takes any type
  e = 677;


  getStudents()
  {
    this.a=false;
    this.b=45;
    this.c="jbjdbk";
  }
}
                                                                                                                                                                                                      