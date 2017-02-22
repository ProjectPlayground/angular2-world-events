import {NgModule} from "@angular/core";
import {HomeRouting} from "./home.routing";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "@angular/material";
import {AddEventComponent} from "./event/add/add-event.component";
@NgModule({
  imports:[
    HomeRouting,
    CommonModule,
    MaterialModule
  ],
  declarations:[
    HomeComponent,
    AddEventComponent
  ],
  entryComponents:[
    AddEventComponent
  ]
})
export class HomeModule{}
