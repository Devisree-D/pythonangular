import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails:any={
    1000:{acno:1000,uname:"userone",balance:5000,password:"user1"},
    1001:{acno:1001,uname:"usertwo",balance:5000,password:"user2"},
    1002:{acno:1002,uname:"userthree",balance:5000,password:"user3"},
    1003:{acno:1003,uname:"userfour",balance:5000,password:"user4"},
    1004:{acno:1004,uname:"userfive",balance:7000,password:"user5"}
  }

  constructor() { }

  withdraw(acno:any,password:any,amount:any){
    var acno=acno;
    var password=password;
    var amt=parseInt(amount);
    let dataset=this.accountDetails;
    if (acno in dataset){
        if (password==dataset[acno]["password"]){
          if (amt<=dataset[acno]["balance"]){
            dataset[acno]["balance"]=dataset[acno]["balance"]-amt;
            alert("transaction successful")
            return dataset[acno]["balance"]
          }
          else{
            alert("insufficient balance")

          }
            
        }
        else{
          alert("invalid password")
          return false
        }
    }
    else{
      alert("invalid credentials")
      return false
    }
  }

  deposit(acno:any,password:any,amount:any){
    var acno=acno;
    var password=password;
    var amt=parseInt(amount);
    let dataset=this.accountDetails;
    if (acno in dataset){
        if (password==dataset[acno]["password"]){
          dataset[acno]["balance"]=dataset[acno]["balance"]+amt;
          alert("transaction successful")
          return dataset[acno]["balance"]


        }
        else{
          alert("invalid password")
          return false
        }
    }
    else{
      alert("invalid credentials")
      return false
    }
  }


  register(acno:any,uname:any,password:any){
    let dataset=this.accountDetails;
    if (acno in dataset){
      return false
    }
    else{
      dataset[acno]={
        acno,
        uname,
        balance:0,
        password
      }
      return true
    }
  }



  login(acno:any,password:any){
    let dataset=this.accountDetails;
    if (acno in dataset){
        if (password==dataset[acno]["password"]){
          alert("login successful")
          return true
        }
        else{
          alert("invalid password")
          return false
        }
    }
    else{
      alert("invalid account number pls register")
      return false
    }

  }
  
}
