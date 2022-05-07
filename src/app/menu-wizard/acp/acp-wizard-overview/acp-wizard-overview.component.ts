import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acp-wizard-overview',
  templateUrl: './acp-wizard-overview.component.html',
  styleUrls: ['./acp-wizard-overview.component.css']
})
export class AcpWizardOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
