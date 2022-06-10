import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frailty-menu-container',
  templateUrl: './frailty-menu-container.component.html',
  styleUrls: ['./frailty-menu-container.component.css']
})
export class FrailtyMenuContainerComponent implements OnInit {

  menuItemId:number  = 6;
  subMenuItemId:number = 60

  detailHeaderName="header-planning-ahead"
  title="WHERE TO START?"

  constructor() { }

  ngOnInit(): void {
  }

}
