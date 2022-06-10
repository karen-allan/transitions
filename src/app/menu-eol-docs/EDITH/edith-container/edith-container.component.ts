import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edith-container',
  templateUrl: './edith-container.component.html',
  styleUrls: ['./edith-container.component.css']
})
export class EdithContainerComponent implements OnInit {

  menuItemId:number  = 6;
  subMenuItemId:number = 63

  detailHeaderName="header-edith"
  title="ALL ABOUT EDITH"

  constructor() { }

  ngOnInit(): void {
  }

}
