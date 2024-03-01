import {Component, Input} from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-change-your-rep-wizard-header',
  templateUrl: './change-your-rep-wizard-header.component.html',
  styleUrl: './change-your-rep-wizard-header.component.css'
})
export class ChangeYourRepWizardHeaderComponent {

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
