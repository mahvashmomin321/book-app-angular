import { Component, OnInit } from '@angular/core';
import { Customer, Address } from './customer';


@Component({
    templateUrl:'./customer-registration.component.html',
    // selector:'customer-registration'
})
export class CustomerRegistrationComponent implements OnInit{
    customer: Customer;
    ngOnInit(){
        this.customer= new Customer();
        this.customer.address= new Address();
    }
}