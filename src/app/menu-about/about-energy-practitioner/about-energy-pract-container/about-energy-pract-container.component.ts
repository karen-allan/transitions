import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-energy-pract-container',
  templateUrl: './about-energy-pract-container.component.html',
  styleUrls: ['./about-energy-pract-container.component.css']
})
export class AboutEnergyPractContainerComponent implements OnInit {

  menuItemId:number = 1;
  subMenuItemId:number = 11;

  detailHeaderName = 'header-about-eem-pract'
  title='Working with Energy'


  constructor() { }

  ngOnInit(): void {
  }

}
