import { Component } from '@angular/core';
import * as Constants from "../../../../ts-files/constants";
import {AdvanceDirective} from "../../../../ts-files/advance_directive";

@Component({
  selector: 'app-screen-form-write-directive-container',
  templateUrl: './screen-form-write-directive-container.component.html',
  styleUrl: './screen-form-write-directive-container.component.css'
})
export class ScreenFormWriteDirectiveContainerComponent {

  menuItemId:number  = 2;
  subMenuItemId:number = 22;

  lookupParent=Constants.PLAN_AHEAD
  lookupChild1: string=Constants.UNDERSTAND_ADVANCE_PLAN
  lookupChild2: string=Constants.CHOOSE_YOUR_REPS

  title=Constants.WRITE_ADVANCE_CARE_PLAN
  quote: string='The scariest moment is always just before you start.';
  author: string='Stephen King';

  today = new Date();

  directive:AdvanceDirective;
  modal:boolean=false;

  constructor() {

    //check box items are true false booleans while radio button items are yes and no constants
    //type in new Name ( then space bar and comma, right click and show context actions then Generate Argument stubs
    this.directive = new AdvanceDirective("", "", "", "", "", "British Columbia",
        "", "", "", "", "", "", "",
        "", "", "", "", "", "", "",
        "", "", "", false, false, false, "",
        "", "", false, false, false, false, false,false, false,
        false, false, false, false, false, "")
  }
}

