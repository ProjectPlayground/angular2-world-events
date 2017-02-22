import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
@Component({
  moduleId:module.id,
  selector:'home',
  templateUrl:'home.component.html',
  styleUrls:['home.component.css']
})
export class HomeComponent{
  isDarkTheme = true;
  events:FirebaseListObservable<any[]>;
  constructor(private angularFire:AngularFire){
    this.events = angularFire.database.list("/events");
  }
}
