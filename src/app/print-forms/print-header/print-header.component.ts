import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../ts-files/client";
import {formatDate} from "@angular/common";
import {RepNine} from "../../ts-files/rep-nine";
import {WishesWizard} from "../../ts-files/wishes-wizard";
import {AdvanceDirective} from "../../ts-files/advance_directive";

@Component({
  selector: 'app-print-header',
  templateUrl: './print-header.component.html',
  styleUrl: './print-header.component.css'
})


export class PrintHeaderComponent implements OnInit {

  @Input() patient:string;
  @Input() planner:string;
  @Input() caregiver: string;
  @Input() client: Client;
  @Input() rep: RepNine;
  @Input() wishes:WishesWizard;
  @Input() directive: AdvanceDirective;
  @Input() title:string;

  consult1:string=  "How to Plan for my Future Care";
  consult2:string=  "My Need for Support as Caregiver";
  consult3:string=  "My Need for Support as Patient";

  promptConsult:string="Client Intake Form"
  now:string;
  name:string;

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
