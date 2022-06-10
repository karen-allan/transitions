import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rep-section-nine-container',
  templateUrl: './rep-section-nine-container.component.html',
  styleUrls: ['./rep-section-nine-container.component.css']
})
export class RepSectionNineContainerComponent implements OnInit {

  menuItemId:number  = 6;
  subMenuItemId:number = 62

  detailHeaderName="header-representative"
  title="name YOUR ADVOCATE"

  constructor() { }

  ngOnInit(): void {
  }

}
