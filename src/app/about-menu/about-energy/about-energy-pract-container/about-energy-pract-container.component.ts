import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-energy-pract-container',
  templateUrl: './about-energy-pract-container.component.html',
  styleUrls: ['./about-energy-pract-container.component.css']
})
export class AboutEnergyPractContainerComponent implements OnInit {

  menuItemId = 2
  subMenuItemId = 21

  detailHeaderName = 'header-about-energy-medicine'
  title='About my Journey into Energy'
  detailListName="list-about-energy"

  constructor() { }

  ngOnInit(): void {
  }

}
