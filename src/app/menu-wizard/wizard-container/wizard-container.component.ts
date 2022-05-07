import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-container',
  templateUrl: './wizard-container.component.html',
  styleUrls: ['./wizard-container.component.css']
})
export class WizardContainerComponent implements OnInit {

  menuItemId:number  = 6;
  subMenuItemId:number = 0

  detailHeaderName="header-wizard"
  title="Plan Ahead Wizard"


  constructor() { }

  ngOnInit(): void {
  }

}
