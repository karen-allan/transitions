import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rep-nine-wizard-container',
  templateUrl: './rep-nine-wizard-container.component.html',
  styleUrls: ['./rep-nine-wizard-container.component.css']
})
export class RepNineWizardContainerComponent implements OnInit {

  menuItemId=6;
  subMenuItemId=61;

  title:string='Assign your Substitute Decision Maker with the Rep-9 Form';
  detailHeaderName="header-wizard"

  constructor() { }

  ngOnInit(): void {
  }

}
