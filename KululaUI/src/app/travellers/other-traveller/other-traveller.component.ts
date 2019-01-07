import { Component, OnInit } from '@angular/core';
import { Traveller } from 'src/app/kululaServices/kulula.model';

@Component({
  selector: 'app-other-traveller',
  templateUrl: './other-traveller.component.html',
  styleUrls: ['./other-traveller.component.css']
})
export class OtherTravellerComponent implements OnInit {

  IsError:boolean=false;
  btnSubmitClick:boolean=false;
  Travellers:Traveller;
  //allPersons:Kulula;
  countss:number[];
  pluss:number=1;
  constructor() {
    this.countss = Array(3).fill(null).map((x,i)=>i); // [0,1,2,3,4]
   }

  ngOnInit() {
    
  }
  OnSubmit(Add_TravellersForm){
    
  }
  

  

}
