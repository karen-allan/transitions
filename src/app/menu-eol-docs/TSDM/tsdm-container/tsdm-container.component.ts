import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tsdm-container',
  templateUrl: './tsdm-container.component.html',
  styleUrls: ['./tsdm-container.component.css']
})
export class TsdmContainerComponent implements OnInit {

  menuItemId:number  = 6;
  subMenuItemId:number = 61

  detailHeaderName="header-tsdm"
  title="What is a TSDM?"

  constructor() { }

  ngOnInit(): void {
  }

}
