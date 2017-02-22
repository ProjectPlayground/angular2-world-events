import {NgModule} from "@angular/core";
import {HomeRouting} from "./home.routing";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
@NgModule({
  imports:[
    HomeRouting,
    CommonModule
  ],
  declarations:[
    HomeComponent
  ]
})
export class HomeModule{}
