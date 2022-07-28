import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-of-life-planning-container',
  templateUrl: './end-of-life-planning-container.component.html',
  styleUrls: ['./end-of-life-planning-container.component.css']
})
export class EndOfLifePlanningContainerComponent implements OnInit {

  menuItemId:number  = 3;
  subMenuItemId:number = 30;

  detailHeaderName="header-end-of-life-planning"
  title="End of Life Planning Considerations"

  constructor() { }

  ngOnInit(): void {
  }

}
