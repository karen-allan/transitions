import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-practitioner-container',
  templateUrl: './energy-practitioner-container.component.html',
  styleUrls: ['./energy-practitioner-container.component.css']
})
export class EnergyPractitionerContainerComponent implements OnInit {

  menuItemId = 2
  subMenuItemId = 200
  detailHeaderName = 'header-about-energy-medicine'
  title='About my Journey into Energy'

  constructor() { }

  ngOnInit(): void {
  }

}
