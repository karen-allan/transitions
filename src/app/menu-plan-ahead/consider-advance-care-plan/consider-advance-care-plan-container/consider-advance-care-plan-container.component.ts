import { Component } from '@angular/core';
import * as Constants from 'src/app/ts-files/constants'
import {UNDERSTAND_ADVANCE_PLAN} from "src/app/ts-files/constants";

@Component({
  selector: 'app-consider-advance-care-plan-container',
  templateUrl: './consider-advance-care-plan-container.component.html',
  styleUrl: './consider-advance-care-plan-container.component.css'
})
export class ConsiderAdvanceCarePlanContainerComponent {

  menuItemId:number  = 1;
  subMenuItemId:number = 12;

  detailHeaderName="header-consider-care-plan"
  title= Constants.UNDERSTAND_ADVANCE_PLAN;
  quote: string='A person who does not plan long ahead will find trouble at their door.';
  author: string='Confucius';
}
