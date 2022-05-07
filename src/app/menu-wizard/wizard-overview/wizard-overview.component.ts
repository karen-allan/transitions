import {Component, Input, OnInit} from '@angular/core';
import {DatePipe, ViewportScroller} from "@angular/common";
import {Router} from "@angular/router";


@Component({
  selector: 'app-wizard-overview',
  templateUrl: './wizard-overview.component.html',
  styleUrls: ['./wizard-overview.component.css']
})

export class WizardOverviewComponent implements OnInit {

  @Input() title='';
  sectionSelected: string ='';

  constructor(public datePipe: DatePipe, private router: Router ) {
  }

  ngOnInit(): void {
  }

  /*********************************************************************************/
  getTriggeredPromptKey(id: number) {

    if (id == 1) {
      this.sectionSelected = "triggeredSection1"
    }
    if (id == 2) {
      this.sectionSelected = "triggeredSection2"
    }
    if (id == 3) {
      this.sectionSelected = "triggeredSection3"
    }
    if (id == 4) {
      this.sectionSelected = "triggeredSection4"
    }
    if (id == 5) {
      this.sectionSelected = "triggeredSection5"
    }
    if (id == 6) {
      this.sectionSelected = "triggeredSection6"
    }
  }

}