import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trace-meridians-container',
  templateUrl: './trace-meridians-container.component.html',
  styleUrls: ['./trace-meridians-container.component.css']
})
export class TraceMeridiansContainerComponent implements OnInit {

  menuItemId:number   = 3;
  subMenuItemId:number = 35;

  detailHeaderName = 'header-trace-meridians'
  title='Know about your Meridians'
  detailListName="list-energy-medicine"

  constructor() { }

  ngOnInit(): void {
  }

}
