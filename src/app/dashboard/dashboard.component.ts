import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno=""
  password=""
  amount=""
  wacno=""
  wpassword=""
  wamount=""

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    const result=this.dataService.deposit(this.acno,this.password,this.amount)
    if (result){
      alert("Amount "+this.amount+" deposited successfully. Available balance is Rs "+result )
      
    }
    else{
      alert("transaction failed")
    }

  }
  withdraw(){
    const result=this.dataService.withdraw(this.wacno,this.wpassword,this.wamount)
    if (result){
      alert("Amount "+this.amount+" deducted successfully. Available balance is Rs "+result )
      
    }
    else{
      alert("transaction failed")
    }

  }

}
