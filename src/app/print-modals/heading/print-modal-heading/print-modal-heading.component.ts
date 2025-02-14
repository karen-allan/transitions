import {Component, Input} from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {RepNine} from "../../../ts-files/rep-nine";
import {AdvanceDirective} from "../../../ts-files/advance_directive";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-print-modal-heading',
  templateUrl: './print-modal-heading.component.html',
  styleUrl: './print-modal-heading.component.css'
})
export class PrintModalHeadingComponent {

  @Input() wishes:WishesWizard;
  @Input() rep:RepNine;
  @Input() directive: AdvanceDirective;

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
