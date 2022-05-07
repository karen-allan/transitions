import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-transfer-wizard-overview',
  templateUrl: './transfer-wizard-overview.component.html',
  styleUrls: ['./transfer-wizard-overview.component.css']
})
export class TransferWizardOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
