import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-energy-pract-container',
  templateUrl: './about-energy-pract-container.component.html',
  styleUrls: ['./about-energy-pract-container.component.css']
})
export class AboutEnergyPractContainerComponent implements OnInit {

  menuItemId = 2
  subMenuItemId = 21

  detailHeaderName = 'header-about-energy-practitioner'
  title='Becoming a Practitioner'
  detailListName="list-about"

  constructor() { }

  ngOnInit(): void {
  }

}
