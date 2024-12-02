import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
res: any;

id=0;
product: any;

  constructor(private _productservice:ProductService){

  }
  ngOnInit()
  {
    this._productservice.getproductsUsingPromise().then(
      (res)=>{
        console.log(res);
      }
    )
  }
  deleteproduct()
  {
    this.id=this.id+1;
    this._productservice.deleteproduct(this.id).subscribe(
      (res)=>{
        console.log(res);
        this.res=res.products
      }
    )
    
    }
  }


