import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-from',
  templateUrl: './customer-from.component.html',
  styleUrls: ['./customer-from.component.css']
})
export class CustomerFromComponent implements OnInit {
  customer:any = {};
  customerList:any = [];
  joecustomerList:any = [];
  garycustomerList:any = [];
  Joequeue = 0
  Garyqueue= 0
  customerqueue =0 
  
  constructor() { }

  ngOnInit() {
  }

  validate(){
    //this.customerList.push(this.customer)
   
    if(this.customer.stylist =='Joe') {
       this.joecustomerList.push(this.customer.name);
       this.customerList.push(this.customer);
        this.customer.stylist = 'Joe';
        this.StylistQueue = this.joecustomerList.length;
       }
    else if(this.customer.stylist =='Gary') 
        {this.garycustomerList.push(this.customer.name);
        this.customerList.push(this.customer);
        this.customer.stylist = 'Gary';
        this.StylistQueue =  this.garycustomerList.length;
        }
    else 
        {
          if(this.joecustomerList.length < this.garycustomerList.length) {               
          this.joecustomerList.push(this.customer.name);
          this.customerList.push(this.customer);
          this.customer.stylist = 'Joe';
          this.StylistQueue = this.joecustomerList.length;
        } else if(this.joecustomerList.length > this.garycustomerList.length) {
          this.garycustomerList.push(this.customer.name);
          this.customerList.push(this.customer);
          this.customer.stylist = 'Gary';
          this.StylistQueue =  this.garycustomerList.length;
        } else {
          //When both the barbers have the same number of customers in the Queue.The next customer will by default go to Joe.
           this.joecustomerList.push(this.customer.name);
           this.customerList.push(this.customer);
           this.customer.stylist = 'Joe';
           this.StylistQueue = this.joecustomerList.length;
                }
        }
         localStorage.setItem('customers', JSON.stringify(this.customerList));
    console.log(this.customerList);

    this.customer = [] 

    }
   countreduce(customer)
   {
     let index;
     if (customer.stylist=='Joe')
     {
      index = this.joecustomerList.indexOf(customer.name)
      this.joecustomerList.splice(index,1)
      this.joecustomer = customer.name
     } else  if (customer.stylist=='Gary') {
       index = this.garycustomerList.indexOf(customer.name)
       this.garycustomerList.splice(index,1)
       this.garycustomer = customer.name
     
     }
      for (var i = 0; i <  this.customerList.length; i++) {
          if(this.customerList[i].name == customer.name) {
            this.customerList.splice(i,1)
            break;
          }
      }
     

   }
  }
 
