import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dnr-wizard-overview',
  templateUrl: './dnr-wizard-overview.component.html',
  styleUrls: ['./dnr-wizard-overview.component.css']
})
export class DnrWizardOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
