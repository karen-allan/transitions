import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnr-wizard-container',
  templateUrl: './dnr-wizard-container.component.html',
  styleUrls: ['./dnr-wizard-container.component.css']
})
export class DnrWizardContainerComponent implements OnInit {

  menuItemId=6;
  subMenuItemId=0;

  title:string='Do Not Resuscitate (DNR) Form';
  detailHeaderName="header-wizard"

  constructor() { }

  ngOnInit(): void {
  }

}
