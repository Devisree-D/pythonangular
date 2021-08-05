import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your perfect banking partner"
  acno="Ac No here..."
  password=""
  

  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
  ChangeAcc(event:any){
    this.acno=event.target.value;
    console.log(this.acno);
  }
  ChangePwd(event:any){
    this.password=event.target.value;
    console.log(this.password);
  }
  login(){
    var acno=this.acno;
    var password=this.password;
    const result=this.dataService.login(acno,password);
    if (result){
      this.router.navigateByUrl("dashboard")
    }
  }
  register(){
  
    this.router.navigateByUrl("register")
  }

} 
    
    // var acno=this.accno;
    // var password=this.pwd; ##for normal binding. otherwise the below defined can be used event binding using reference
    // var acno=a.value;  
    // var password=p.value;
    
  
  
