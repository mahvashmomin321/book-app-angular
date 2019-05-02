import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';


@Injectable()
export class CustomerService{
    constructor(private http: HttpClient) {}

    baseUrl= "http://localhost:8000/";

    registerNewCustomer(customer: Customer):Observable<Customer>{
        return this.http.post<Customer>(this.baseUrl+"customers",customer);
    }
}