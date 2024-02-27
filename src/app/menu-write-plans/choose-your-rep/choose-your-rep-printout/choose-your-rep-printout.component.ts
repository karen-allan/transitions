import {Component, Input} from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-choose-your-rep-printout',
  templateUrl: './choose-your-rep-printout.component.html',
  styleUrl: './choose-your-rep-printout.component.css'
})
export class ChooseYourRepPrintoutComponent {

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
