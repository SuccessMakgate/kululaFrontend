import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Traveller, Kulula } from '../kululaServices/kulula.model';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { KululaService } from '../kululaServices/kulula.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-travellers',
  templateUrl: './travellers.component.html',
  styleUrls: ['./travellers.component.css']
})

export class TravellersComponent implements OnInit {
  IsError:boolean=false;
  complete:boolean=false;
  btnSubmitClick:boolean=false;
  Travellers:Traveller;
  allPersons:Kulula;
  countss:number[];
  pluss:number=1;
  constructor(private router:Router,private kululaService:KululaService) {
    this.countss = Array(3).fill(null).map((x,i)=>i); // [0,1,2,3,4]
   }

  ngOnInit() {
     
      $(document).ready(function () {
        $('#id_main').click(function () {
           console.log('main clicked');
           $('#tab_other').slideUp(3, function () {
            $('#tab_main').slideDown(300, function () {
                $(this).addClass('active');   
            });
        });

        })
        $('#id_other').click(function () {
          console.log('others clicked');
          $('#tab_main').slideUp(3, function () {
            $('#tab_other').slideDown(300, function () {
                $(this).addClass('active');   
            });
        });
       })
       
        $('#trTable').append('<div class="row">'
                      + '<div class="col s8" id="FlightName"><span class="label label-info ">'
                      + '</span></div>'
                      + '<div class="col s8" id="DepartDate">sss<span class="label label-info"></span></div>'
                      + '<div class="col s8" id="ArriveDate">dddd<span class="label label-info"></span></div>'
                      + '<div class="col s8" id="ArriveDate">sss<span class="label label-info"></span></div>'
                      + '<div class="clo s8" id="FlightStatus">ddd<span class="label label-info"><input type="button" href="/home" id="btnBook" "/></span></div></div>');
       
    });
    
  }
  OnSubmit(form:NgForm){
    this.complete=true;
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


