import {Component, Input} from '@angular/core';
import {formatDate} from "@angular/common";
import {AdvanceDirective} from "../../../ts-files/advance_directive";

@Component({
  selector: 'app-write-advance-directive-wizard-header',
  templateUrl: './write-advance-directive-wizard-header.component.html',
  styleUrl: './write-advance-directive-wizard-header.component.css'
})
export class WriteAdvanceDirectiveWizardHeaderComponent {

  @Input() directive: AdvanceDirective;
  now: string;
  name: string;

  constructor() {
  }

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.getCurrentDate();
    this.getClientName();
  }

  /* *************************************************************************************************************** */
  getCurrentDate() {
    const today = new Date();
    this.now = formatDate(today, 'longDate', 'en-US')
  }

  /* *************************************************************************************************************** */
  getClientName() {
    this.name = this.directive.client_name;
  }
}
