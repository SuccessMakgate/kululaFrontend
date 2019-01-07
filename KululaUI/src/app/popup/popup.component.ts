import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { logging } from 'protractor';
import { HttpErrorResponse } from '@angular/common/http';
import { KululaService } from '../kululaServices/kulula.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private modalservice:BsModalService,private kululaService:KululaService) { }
  modelRef:BsModalRef;
  open:boolean=true;
  onSave2pdf:boolean=false;
  background:any='background';
  hide:any='hide';
  recipient:any;
  recipients:any='unknown';
  now:Date=new Date(Date.now());
  ngOnInit() {
   // this.recipient=localStorage.getItem('userName');
    if(this.recipient == null && this.recipient =="Guest" )this.recipient="Email Address Here !";
  
  }
  hideAlert(){
    this.open=false;
  }
  save2pdf(){  
    this.onSave2pdf=!this.onSave2pdf;
    this.background='background_onload';
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
     var imgWidth = 208;   
     var pageHeight = 295;    
     var imgHeight = canvas.height * imgWidth / canvas.width;  
     var heightLeft = imgHeight;  
  
     const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
     var position = 20;  
      pdf.addImage(contentDataURL, 'PNG', 0,position, imgWidth, imgHeight);
      
      console.log('saving pdf...');
      pdf.save('MYPdf.pdf'); // Generated PDF   
      this.onSave2pdf=false;
      this.background='background';
    });  
 }

  print(){
  var data = document.getElementById('contentToConvert').innerHTML;  

   var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
   popupWinindow.document.open();
   popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" />'+data +'</head><body onload="window.print()"></html>');
   popupWinindow.document.close();

  }
  email(){
     //console.log(this.recipientsss +' email address');
     this.kululaService.EmailTicket('email',document.getElementById('contentToConvert')).subscribe(
      (d:any)=>{
        console.log('EMAIL SENT SUCCESS   '+d);
      },
      (er:HttpErrorResponse)=>{
         console.log('email sent error '+er.statusText);
      }
     )
     this.modalservice.hide(1); 
    // document.getElementById('successModal').toggleAttribute
     //$('#successModal').modal('show');
 }
 openModal(template){ 
  this.modelRef=this.modalservice.show(template); 
  
}
confirm(){
  this.modalservice.hide(1); 
 
}
decline(){
  this.modalservice.hide(1); 
}

}
