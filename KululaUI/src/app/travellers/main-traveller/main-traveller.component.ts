import { Component, OnInit } from '@angular/core';
import { Traveller } from 'src/app/kululaServices/kulula.model';
import { HttpErrorResponse } from '@angular/common/http';
import { KululaService } from 'src/app/kululaServices/kulula.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-traveller',
  templateUrl: './main-traveller.component.html',
  styleUrls: ['./main-traveller.component.css']
})
export class MainTravellerComponent implements OnInit {

  IsError:boolean=false;
  btnSubmitClick:boolean=false;
  Travellers:Traveller;
  //allPersons:Kulula;
  countss:number[];
  pluss:number=1;
  constructor(private kululaService:KululaService) {
    this.countss = Array(3).fill(null).map((x,i)=>i); // [0,1,2,3,4]
   }


  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    this.kululaService.AddTravellers(form.value).subscribe(
    (data:any)=>{

    },
    (error:HttpErrorResponse)=>{
      console.log('Error :'+error.message);
      console.log('Error :'+error.status);
    }
     )
  }

}
