import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private url="https://dummyjson.com/products";


  constructor(private _url:HttpClient)
{

}  
    public getproducts():Observable<any>{
      return this._url.get(this.url);
    }

    public getproductsUsingPromise():Promise<any>{
     // return this._url.get(this.url).toPromise();
     return firstValueFrom(this._url.get(this.url));



    }
   
    public deleteproduct(id: number):Observable<any>{
      return this._url.delete(this.url);
    }

    public addUser(data):Observable<any>{
      return this._url.post(this.url, data);
    }
    
}
