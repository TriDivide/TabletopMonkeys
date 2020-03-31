import { Injectable } from '@angular/core';
import { BaseModelService } from './base-model.service';
import { environment } from '../environments/environment';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class UserModelService {

  constructor() { 
    
  }

  private app = firebase.initializeApp(environment.firebaseConfig);


  public async doLogin(emailAddress: string, password: string, callback: (success: boolean, error?: Error) => void) {
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      console.log("signed in successfully");
      callback(true, null);
    }
    catch(error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`Hit an error whilst signing in: ${errorCode}, error message: ${errorMessage}`)
      callback(false, error);
    }
  }

  public async doSignUp(emailAddress: string, password: string, name: String, callback: (error?: Error) => void) {
    try {
      const signUpPromise = await firebase.auth().createUserWithEmailAndPassword(emailAddress, password);
      console.log("SignedUpSuccessfully");
      const userId = signUpPromise.user.uid;

      try {
        await firebase.firestore().collection("Users").doc(userId).set({name: name, emailAddress: emailAddress});
        console.log("Created user successfully");

        callback(undefined);

      }
      catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(`hit an error whilst generating the user: ${errorCode}, error message: ${errorMessage}`);
        callback(error);
      }
    }
    catch(error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`hit and error whilst signing up: ${errorCode}, error message: ${errorMessage}`);
      callback(error);
    }
  }

  public async doSignOut(callback: (success: boolean, error?: Error) => void) {
    try {
      await firebase.auth().signOut()
      callback(true, null)
    }
    catch(error) {
      console.log(`Hit an error whilst signing in: ${error.errorCode}, error message: ${error.message}`)
      callback(false, error);    
    }
  }
}
