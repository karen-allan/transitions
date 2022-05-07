import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acp-wizard-container',
  templateUrl: './acp-wizard-container.component.html',
  styleUrls: ['./acp-wizard-container.component.css']
})
export class AcpWizardContainerComponent implements OnInit {

  menuItemId=6;
  subMenuItemId=0;

  title:string='Advanced Directive';
  detailHeaderName="header-wizard"

  constructor() { }

  ngOnInit(): void {
  }

}
