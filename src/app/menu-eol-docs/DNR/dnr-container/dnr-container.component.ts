import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnr-container',
  templateUrl: './dnr-container.component.html',
  styleUrls: ['./dnr-container.component.css']
})
export class DnrContainerComponent implements OnInit {

  menuItemId:number  = 6;
  subMenuItemId:number = 64

  detailHeaderName="header-dnr"
  title="ALL ABOUT DNRs"

  constructor() { }

  ngOnInit(): void {
  }

}
