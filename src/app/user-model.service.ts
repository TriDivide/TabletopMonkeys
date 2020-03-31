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
