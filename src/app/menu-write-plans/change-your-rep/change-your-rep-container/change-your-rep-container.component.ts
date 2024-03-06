import { Component } from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";

@Component({
  selector: 'app-change-your-rep-container',
  templateUrl: './change-your-rep-container.component.html',
  styleUrl: './change-your-rep-container.component.css'
})
export class ChangeYourRepContainerComponent {

  menuItemId:number  = 3;
  subMenuItemId:number = 32;

  detailHeaderName="header-choose-rep"
  title="Change Your Representative"


  rep:RepNine;

  /* To append a field, put a comma at end, then space, the '' it will place next field */
  constructor() {

    //type in new Name ( then space bar and comma, right click and show context actions then Generate Argument stubs
    this.rep = new RepNine("", "", "", "", "",
        "", "", "", "", "", "", '',
        "", "");
  }

}
