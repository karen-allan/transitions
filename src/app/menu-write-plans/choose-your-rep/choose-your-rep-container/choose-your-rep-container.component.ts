import { Component, OnInit } from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";


@Component({
  selector: 'app-choose-your-rep-container',
  templateUrl: './choose-your-rep-container.component.html',
  styleUrls: ['./choose-your-rep-container.component.css']
})
export class ChooseYourRepContainerComponent implements OnInit {

  menuItemId:number  = 3;
  subMenuItemId:number = 31;

  detailHeaderName="header-choose-rep"
  title="Assign Your Representative(s)"
  /*today = new Date();
  legalDate =  formatDate(this.today, 'y/MM/d',  'en-US')*/

  rep:RepNine;

  /* To append a field, put a comma at end, then space, the '' it will place next field */
  constructor() {

    //type in new Name ( then space bar and comma, right click and show context actions then Generate Argument stubs
    //type in new Name ( then space bar and comma, right click and show context actions then Generate Argument stubs
    this.rep = new RepNine("", "", "", "", "",
        "", "", "", "", "", "", "",
        "", "");
  }
  ngOnInit(): void {
  }

}
