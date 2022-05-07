import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rep-nine-wizard-container',
  templateUrl: './rep-nine-wizard-container.component.html',
  styleUrls: ['./rep-nine-wizard-container.component.css']
})
export class RepNineWizardContainerComponent implements OnInit {

  menuItemId=6;
  subMenuItemId=0;

  title:string='Representative Section 9';
  detailHeaderName="header-wizard"

  constructor() { }

  ngOnInit(): void {
  }

}