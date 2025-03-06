import {Component, Input} from '@angular/core';
import {formatDate} from "@angular/common";
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-print-form-heading',
  templateUrl: './print-form-heading.component.html',
  styleUrl: './print-form-heading.component.css'
})
export class PrintFormHeadingComponent {

  @Input() patient:string;
  @Input() planner:string;
  @Input() caregiver: string;
  @Input() client: Client;

  now:string;


  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.getCurrentDate();
  }

  /* *************************************************************************************************************** */
  getCurrentDate() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }
}
