import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  menuItemId:number = 0
  subMenuItemId = 0

  detailHeaderName = 'header-home'
  title='Facing our Mortality'
  slogan='knowledge is power'

  constructor() { }

  ngOnInit(): void {
  }

}
