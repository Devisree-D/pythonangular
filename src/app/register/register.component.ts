import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  aim=" Please Register here"
  registerForm=this.fb.group({
    uname:['',[Validators.required]],
    acno:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  constructor(private dataService:DataService,private router:Router,private fb:FormBuilder) { }
  ngOnInit(): void {
  }

  register(){
    var acno=this.registerForm.value.uname
    var uname=this.registerForm.value.acno
    var password=this.registerForm.value.password
    console.log(this.registerForm.get("uname")?.errors);
    if(this.registerForm.get('uname')?.errors){
      alert("username required")
    }
  if (this.registerForm.valid){
    const result=this.dataService.register(uname,acno,password)
    if (result){
      alert("registration successful")
      this.router.navigateByUrl("")
    }
    else{
      alert("Account already exists!! please Login.")
    }

  }
  
  }


}



