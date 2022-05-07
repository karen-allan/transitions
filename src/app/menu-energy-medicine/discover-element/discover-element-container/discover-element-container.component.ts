import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-element-container',
  templateUrl: './discover-element-container.component.html',
  styleUrls: ['./discover-element-container.component.css']
})
export class DiscoverElementContainerComponent implements OnInit {

  menuItemId:number = 3;
  subMenuItemId:number = 34;

  detailHeaderName = 'header-discover-element'
  title='Discover Your Element'
  detailListName="list-energy-medicine"

  constructor() { }

  ngOnInit(): void {
  }

}
