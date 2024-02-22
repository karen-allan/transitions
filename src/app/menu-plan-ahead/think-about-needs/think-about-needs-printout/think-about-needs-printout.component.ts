import {Component, Input, OnInit} from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-think-about-needs-printout',
  templateUrl: './think-about-needs-printout.component.html',
  styleUrls: ['./think-about-needs-printout.component.css']
})
export class ThinkAboutNeedsPrintoutComponent implements OnInit {

  @Input() wishes:WishesWizard;
  @Input() now:string;

  constructor() { }

  ngOnInit(): void {
    this.getCurrentDate();
    ;
  }

  /* *************************************************************************************************************** */
  getCurrentDate() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

}
