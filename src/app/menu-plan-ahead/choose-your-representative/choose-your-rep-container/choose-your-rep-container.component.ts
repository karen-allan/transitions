import { Component, OnInit } from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-choose-your-rep-container',
  templateUrl: './choose-your-rep-container.component.html',
  styleUrls: ['./choose-your-rep-container.component.css']
})
export class ChooseYourRepContainerComponent implements OnInit {

  menuItemId:number  = 2;
  subMenuItemId:number = 21;

  detailHeaderName="header-choose-rep"
  title="Choose a representative you trust"
  today = new Date();
  legalDate =  formatDate(this.today, 'y/MM/d',  'en-US')

  rep:RepNine;

  constructor() {

    //type in new Name ( then space bar and comma, right click and show context actions then Generate Argument stubs
    this.rep = new RepNine("Karen Gail Allan", "2608 Airstrip Road", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", this.legalDate );
  }
  ngOnInit(): void {
  }

}
