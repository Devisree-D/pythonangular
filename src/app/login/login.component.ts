import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your perfect banking partner"
  account="account number please..."

  constructor() { }

  ngOnInit(): void {
  }

}
