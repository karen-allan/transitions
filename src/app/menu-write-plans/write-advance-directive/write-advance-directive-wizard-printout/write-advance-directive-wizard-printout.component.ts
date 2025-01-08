import {Component, Input} from '@angular/core';
import {formatDate} from "@angular/common";
import {AdvanceDirective} from "../../../ts-files/advance_directive";

@Component({
  selector: 'app-write-advance-directive-wizard-printout',
  templateUrl: './write-advance-directive-wizard-printout.component.html',
  styleUrl: './write-advance-directive-wizard-printout.component.css'
})
export class WriteAdvanceDirectiveWizardPrintoutComponent {

  @Input() directive: AdvanceDirective;
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
