import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseModelService {

  constructor() { }

  public firebaseConfig = {
    apiKey: "AIzaSyALmcEG90Q_IJ3IXWFre5-LYKZY6Xn2C7s",
    authDomain: "tabletopmonkeys.firebaseapp.com",
    databaseURL: "https://tabletopmonkeys.firebaseio.com",
    projectId: "tabletopmonkeys",
    storageBucket: "tabletopmonkeys.appspot.com",
    messagingSenderId: "972727618853",
    appId: "1:972727618853:web:08ef8cd597262200485ecc",
    measurementId: "G-0N06PC5Y37"
  };
}
