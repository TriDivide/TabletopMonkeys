import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {MatCardModule, MatButtonModule, MatInputModule} from '@angular/material';
import { Router } from '@angular/router';
import { UserModelService } from '../user-model.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent {

  constructor(private router: Router, private userModel: UserModelService) { 
  
  }

  @ViewChild("emailAddress", {static: true}) emailInput: ElementRef;
  @ViewChild("password", {static: true}) passwordInput: ElementRef;

  emailAddress: string;
  password: string;

  public doLogin() {

    this.emailAddress = this.emailInput.nativeElement.value;
    this.password = this.passwordInput.nativeElement.value;

    if(this.emailAddress.length <= 0) {
      console.log("please enter an email address");
    }

    if (this.password.length < 6) {
      console.log("Please enter a password that is six characters or longer");
    }

    console.log(`${this.emailAddress} ${this.password}`);
    this.userModel.doLogin(this.emailAddress, this.password, (success, error) => {
      if (error != null) {
        console.log("login failed");
        return;
      }
      
      if (success) {
        this.router.navigate(["Dashboard"]);
      }
    });
  
  }

  public doShowSignup() {
    console.log("show the signup");
    this.router.navigate(["Signup"]);
  }

}
