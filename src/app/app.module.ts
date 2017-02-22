import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {AppRouting} from "./app.routing";

export const firebaseConfig = {
  apiKey:'AIzaSyBzYvPRnIaYkukggXjN310PHYZxrPfMhj8',
  authDomain:'sampleandroidappusingfir-a68b0.firebaseapp.com',
  databaseURL:'https://sampleandroidappusingfir-a68b0.firebaseio.com',
  storageBucket:'sampleandroidappusingfir-a68b0.appspot.com',
  messagingSenderId:'1014939438110'
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
