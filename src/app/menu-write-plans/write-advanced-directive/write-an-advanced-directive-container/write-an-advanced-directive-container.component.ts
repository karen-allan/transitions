import { Component } from '@angular/core';
import {formatDate} from "@angular/common";
import {RepNine} from "../../../ts-files/rep-nine";

@Component({
  selector: 'app-write-an-advanced-directive-container',
  templateUrl: './write-an-advanced-directive-container.component.html',
  styleUrl: './write-an-advanced-directive-container.component.css'
})
export class WriteAnAdvancedDirectiveContainerComponent {


  menuItemId:number  = 3;
  subMenuItemId:number = 32;

  detailHeaderName="header-choose-rep"
  title="Write an Advanced Care Plan"
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
