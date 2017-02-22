import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {MdDialog} from "@angular/material";
import {AddEventComponent} from "./event/add/add-event.component";
@Component({
  moduleId:module.id,
  selector:'home',
  templateUrl:'home.component.html',
  styleUrls:['home.component.css']
})
export class HomeComponent{
  isDarkTheme = true;
  events:FirebaseListObservable<any[]>;
  constructor(private angularFire:AngularFire,private dialog:MdDialog){
    this.events = angularFire.database.list("/events");
  }
  addEvent(){
    console.log("add event");
    let dialogRef = this.dialog.open(AddEventComponent);
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
    });
  }
}
