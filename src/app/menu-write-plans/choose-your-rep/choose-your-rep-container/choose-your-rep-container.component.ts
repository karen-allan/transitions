import { Component, OnInit } from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";
import * as Constants from 'src/app/ts-files/constants'

@Component({
  selector: 'app-choose-your-rep-container',
  templateUrl: './choose-your-rep-container.component.html',
  styleUrls: ['./choose-your-rep-container.component.css']
})
export class ChooseYourRepContainerComponent implements OnInit {

  menuItemId:number  = 2;
  subMenuItemId:number = 21;

  lookupParent=Constants.PLAN_AHEAD
  lookupChild: string=Constants.CONSIDER_YOUR_ADVOCATES

  title= Constants.CHOOSE_YOUR_REPS
  quote: string='When the world is silent, even one voice becomes powerful.';
  author: string='Malala Yousafzai';

  rep:RepNine;

  /* To append a field, put a comma at end, then space, the '' it will place next field */
  constructor() {

    //type in new Name ( then space bar and comma, right click and show context actions then Generate Argument stubs
    //type in new Name ( then space bar and comma, right click and show context actions then Generate Argument stubs
    this.rep = new RepNine("", "", "", "", "",
        "", "", "", "", "", "", '',
        "", "");
  }
  ngOnInit(): void {
  }

}
