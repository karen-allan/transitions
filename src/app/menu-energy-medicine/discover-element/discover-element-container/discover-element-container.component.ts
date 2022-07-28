import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-element-container',
  templateUrl: './discover-element-container.component.html',
  styleUrls: ['./discover-element-container.component.css']
})
export class DiscoverElementContainerComponent implements OnInit {

  menuItemId:number = 2;
  subMenuItemId:number = 24;

  detailHeaderName = 'header-energy-element'
  title='Discover Your Element'


  constructor() { }

  ngOnInit(): void {
  }

}
