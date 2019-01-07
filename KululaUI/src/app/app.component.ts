import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  on:boolean=false;
  Login:string="Guest";
  btnValue:string="Login";
  open:boolean=true;
  constructor(private router:Router){}
  
  ngOnInit() {
    this.Login=localStorage.getItem('userName');
    if(this.Login != null && this.Login !="Guest" )this.btnValue="Logout";
    else {
      this.Login="Guest";
      this.btnValue="Login";
    }
  }
  logout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    this.router.navigate(['account/login']);
    this.Login="Guest";
    this.btnValue="Login";
    location.reload();
  }
  

  hideAlert(){
    this.open=false;
  }
}
