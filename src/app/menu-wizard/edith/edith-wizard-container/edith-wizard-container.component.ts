import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edith-wizard-container',
  templateUrl: './edith-wizard-container.component.html',
  styleUrls: ['./edith-wizard-container.component.css']
})
export class EdithWizardContainerComponent implements OnInit {

  menuItemId=6;
  subMenuItemId=0;

  title:string='Expected Death in the Home (EDITH)';
  detailHeaderName="header-wizard"

  constructor() { }

  ngOnInit(): void {
  }

}
