import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
@Component({
  moduleId:module.id,
  selector:'home',
  templateUrl:'home.component.html'
})
export class HomeComponent{
  events:FirebaseListObservable<any[]>;
  constructor(private angularFire:AngularFire){
    this.events = angularFire.database.list("/events");
  }
}
