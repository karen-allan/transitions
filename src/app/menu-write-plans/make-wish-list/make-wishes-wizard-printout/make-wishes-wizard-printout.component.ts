import {Component, Input, OnInit} from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-make-wishes-wizard-printout',
  templateUrl: './make-wishes-wizard-printout.component.html',
  styleUrl: './make-wishes-wizard-printout.component.css'
})
export class MakeWishesWizardPrintoutComponent implements OnInit {

  @Input() wishes:WishesWizard;
  @Input() now:string;

  constructor() { }

  ngOnInit(): void {
    this.getCurrentDate();
  }

  /* *************************************************************************************************************** */
  getCurrentDate() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

}
