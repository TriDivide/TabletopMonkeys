import { Component, ViewChild, ElementRef } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent{

  @ViewChild("emailAddress", {static: true}) emailAddress: ElementRef;
  @ViewChild("password", {static: true}) password: ElementRef;
  @ViewChild("confirmPassword", {static: true}) confirmPassword: ElementRef;
  @ViewChild("firstName", {static: true}) firstName: ElementRef;
  @ViewChild("lastName", {static: true}) lastName: ElementRef;
  
  constructor(private location: Location) { }


  public doSignup() {

  }

  public doCancel() {
    this.location.back();
  }
}
