import {Component, Input, OnInit} from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-think-about-needs-wizard-header',
  templateUrl: './think-about-needs-wizard-header.component.html',
  styleUrls: ['./think-about-needs-wizard-header.component.css']
})
export class ThinkAboutNeedsWizardHeaderComponent implements OnInit {

  @Input() wishes:WishesWizard;

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
    this.name=this.wishes.client_name;
  }


}
