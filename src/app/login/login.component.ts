import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your perfect banking partner"
  accno="Ac No here..."
  pwd=""
  accountDetails:any={
    1000:{acno:1000,uname:"userone",balance:5000,password:"user1"},
    1001:{acno:1001,uname:"usertwo",balance:5000,password:"user2"},
    1002:{acno:1002,uname:"userthree",balance:5000,password:"user3"},
    1003:{acno:1003,uname:"userfour",balance:5000,password:"user4"},
    1004:{acno:1004,uname:"userfive",balance:7000,password:"user5"}
}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ChangeAcc(event:any){
    this.accno=event.target.value;
    console.log(this.accno);
  }
  ChangePwd(event:any){
    this.pwd=event.target.value;
    console.log(this.pwd);
  }
  login(){
    var acno=this.accno;
    var password=this.pwd;
    
    // var acno=this.accno;
    // var password=this.pwd; ##for normal binding. otherwise the below defined can be used event binding using reference
    // var acno=a.value;  
    // var password=p.value;
    let dataset=this.accountDetails;
    if (acno in dataset){
        if (password==dataset[acno]["password"]){
          alert("login successful");
          this.router.navigateByUrl("dashboard")
        }
        else{
          alert("invalid password")
        }
    }
    else{
      alert("invalid account number pls register")
    }
    
  }

}
