import {NgModule} from "@angular/core";
import {HomeRouting} from "./home.routing";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "@angular/material";
@NgModule({
  imports:[
    HomeRouting,
    CommonModule,
    MaterialModule
  ],
  declarations:[
    HomeComponent
  ]
})
export class HomeModule{}
