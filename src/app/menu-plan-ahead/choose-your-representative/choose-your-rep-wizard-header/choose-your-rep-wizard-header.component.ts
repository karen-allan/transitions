import {Component, Input, OnInit} from '@angular/core';
import {formatDate} from "@angular/common";
import {RepNine} from "../../../ts-files/rep-nine";

@Component({
  selector: 'app-choose-your-rep-wizard-header',
  templateUrl: './choose-your-rep-wizard-header.component.html',
  styleUrls: ['./choose-your-rep-wizard-header.component.css']
})
export class ChooseYourRepWizardHeaderComponent implements OnInit {

  @Input() rep:RepNine;
  now:string;
  name:string;

  constructor() { }

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.getCurrentDate();
    this.getClientName();
  }

  /* *************************************************************************************************************** */
  getCurrentDate() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

  /* *************************************************************************************************************** */
  getClientName() {
    this.name=this.rep.client_name;
  }


}
