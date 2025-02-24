import {Component} from '@angular/core';
import {AdvanceDirective} from "../../../ts-files/advance_directive";
import * as Constants from 'src/app/ts-files/constants'


@Component({
  selector: 'app-write-advance-directive-container',
  templateUrl: './write-advance-directive-container.component.html',
  styleUrl: './write-advance-directive-container.component.css'
})
export class WriteAdvanceDirectiveContainerComponent {

  menuItemId:number  = 2;
  subMenuItemId:number = 22;

  lookupParent=Constants.PLAN_AHEAD
  lookupChild1: string=Constants.UNDERSTAND_ADVANCE_PLAN
  lookupChild2: string=Constants.CHOOSE_YOUR_ADVOCATES

  title=Constants.WRITE_ADVANCE_CARE_PLAN
  quote: string='The scariest moment is always just before you start.';
  author: string='Stephen King';

  today = new Date();

  directive:AdvanceDirective;

  constructor() {

    //check box items are true false booleans while radio button items are yes and no constants
    //type in new Name ( then space bar and comma, right click and show context actions then Generate Argument stubs
    this.directive = new AdvanceDirective( "","","","", 'B.C.', "",
        "", "", "", "", "", "", "",
        "", "", "", "", "", false, false,
        "", "", "", false, false, false, "",
        "", "", false, false, false, false, false, false,
        false, false, false, false, false, false, "")
  }
}
