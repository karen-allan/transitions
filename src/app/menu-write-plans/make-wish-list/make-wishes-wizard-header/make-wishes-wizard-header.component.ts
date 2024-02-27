import {Component, Input, OnInit} from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-make-wishes-wizard-header',
  templateUrl: './make-wishes-wizard-header.component.html',
  styleUrl: './make-wishes-wizard-header.component.css'
})
export class MakeWishesWizardHeaderComponent implements OnInit {

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
