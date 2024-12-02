import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl='http://localhost:8080/customer';

  constructor(private http:HttpClient) { }
  getAllCustomers()
  {
    return this.http.get(this.baseUrl);
  }
  findCustomerById(id:any)
  {
    return this.http.get(this.baseUrl+"/"+id); 
  }
  addCustomer(customer:any)
  {
    return this.http.post(this.baseUrl+'/insert',customer);
  }
  updateCustomer(customer:any)
  {
    return this.http.put(this.baseUrl+'/'+customer.id,customer);
  }
  deleteCustomer(id:any)
  {
    return this.http.delete(this.baseUrl+"/"+id);
  }
}
