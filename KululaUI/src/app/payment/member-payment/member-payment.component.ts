import { Component, OnInit } from '@angular/core';
import { KululaService } from 'src/app/kululaServices/kulula.service';
import { Router } from '@angular/router';
import { Memberpayment } from 'src/app/kululaServices/kulula.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-member-payment',
  templateUrl: './member-payment.component.html',
  styleUrls: ['./member-payment.component.css']
})
export class MemberPaymentComponent implements OnInit {
  memberpayment : any;
  IsError:boolean=false;
  constructor(private kululaService:KululaService,private router:Router) { }
  
  ngOnInit() {
   
    this.kululaService.MPayment().subscribe(
      (data:any)=>{
      this.memberpayment = data;
   },
   (err : HttpErrorResponse)=>{
     this.IsError=true;
    console.log('Error status '+err.statusText);
    console.log('Error msg '+err.message);
   } 
   );
  }

}
