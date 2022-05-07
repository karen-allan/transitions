import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edith-wizard-overview',
  templateUrl: './edith-wizard-overview.component.html',
  styleUrls: ['./edith-wizard-overview.component.css']
})
export class EdithWizardOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
