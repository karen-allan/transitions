import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-wizard-container',
  templateUrl: './transfer-wizard-container.component.html',
  styleUrls: ['./transfer-wizard-container.component.css']
})
export class TransferWizardContainerComponent implements OnInit {

  menuItemId=6;
  subMenuItemId=0;

  title:string='Private Transfer Permit';
  detailHeaderName="header-wizard"

  constructor() { }

  ngOnInit(): void {
  }

}
