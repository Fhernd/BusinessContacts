import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  AngularFireModule
} from 'angularfire2';

import { AppComponent } from './app.component';

/**
 * Services
 */
import {
  FirebaseService
} from './services/firebase.service';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAkwH2aq-gyS4aijJq727xLb9tyZI9pMaE",
  authDomain: "businesscontacts-2dfc6.firebaseapp.com",
  databaseURL: "https://businesscontacts-2dfc6.firebaseio.com",
  storageBucket: "businesscontacts-2dfc6.appspot.com",
  messagingSenderId: "994710980409"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
