import {Component, Input, OnInit} from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-write-an-advanced-directive-wizard-header',
  templateUrl: './write-an-advanced-directive-wizard-header.component.html',
  styleUrl: './write-an-advanced-directive-wizard-header.component.css'
})
export class WriteAnAdvancedDirectiveWizardHeaderComponent implements OnInit {

  @Input() rep: RepNine;
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
    this.name = this.rep.client_name;
  }
}


