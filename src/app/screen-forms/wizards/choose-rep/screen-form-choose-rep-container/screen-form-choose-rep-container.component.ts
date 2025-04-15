import { Component } from '@angular/core';
import * as Constants from "../../../../ts-files/constants";
import {RepNine} from "../../../../ts-files/rep-nine";

@Component({
  selector: 'app-screen-form-choose-rep-container',
  templateUrl: './screen-form-choose-rep-container.component.html',
  styleUrl: './screen-form-choose-rep-container.component.css'
})
export class ScreenFormChooseRepContainerComponent {

  menuItemId:number  = 2;
  subMenuItemId:number = 21;

  title= Constants.CHOOSE_YOUR_REPS
  quote: string='When the world is silent, even one voice becomes powerful.';
  author: string='Malala Yousafzai';

  rep:RepNine;
  modal:boolean=false;

  constructor() {

    //type in new Name ( then space bar and comma, right click and show context actions then Generate Argument stubs
    this.rep = new RepNine("", "", "", "", "British Columbia",
        "", "", "", "", "", "", '',
        "", "", "", "", '', "",
        "", "", "", "", "", "", "",
        "", "", "", "", "");
  }
}
