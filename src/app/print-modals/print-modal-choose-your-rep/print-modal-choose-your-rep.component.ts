import {Component, Input} from '@angular/core';
import {RepNine} from "../../ts-files/rep-nine";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-print-modal-choose-your-rep',
  templateUrl: './print-modal-choose-your-rep.component.html',
  styleUrl: './print-modal-choose-your-rep.component.css'
})
export class PrintModalChooseYourRepComponent {

  @Input()  rep: RepNine;
  now:string;

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
