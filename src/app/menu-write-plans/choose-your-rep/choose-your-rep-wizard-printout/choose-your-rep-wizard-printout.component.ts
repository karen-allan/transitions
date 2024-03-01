import {Component, Input} from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-choose-your-rep-wizard-printout',
  templateUrl: './choose-your-rep-wizard-printout.component.html',
  styleUrl: './choose-your-rep-wizard-printout.component.css'
})
export class ChooseYourRepWizardPrintoutComponent {

  @Input() rep: RepNine;
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
