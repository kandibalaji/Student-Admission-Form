import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {

  constructor(private _formBuilder: FormBuilder, private _userService:ProductService) {

  }

  // registrationForm = new FormGroup({
  //   userName: new FormControl('coding hub', Validators.required),
  //   password: new FormControl(),
  //   cpassword: new FormControl(),
  //   city: new FormControl(),
  //   state: new FormControl(),
  //   pincode: new FormControl(),

  // })

  registrationForm = this._formBuilder.group({
    userName:['balu',[Validators.required]],
    password:[],
    cpassword:[],
    city:[],
    state:[],
    pincode:[],
  });


  postData() {
    console.log(this.registrationForm.value);
    this._userService.addUser(this.registrationForm.value).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }
  get userName()
  {
    return this.registrationForm.get('userName');
    
  }
}
