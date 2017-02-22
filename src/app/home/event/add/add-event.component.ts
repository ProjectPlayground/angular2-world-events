import {Component, Optional} from "@angular/core";
import {MdDialogRef, MdDialogContent} from "@angular/material";
@Component({
  moduleId:module.id,
  selector:'addevent',
  templateUrl:'add-event.component.html'
})
export class AddEventComponent{
  constructor(@Optional() public dialogRef:MdDialogRef<MdDialogContent>){}
}

