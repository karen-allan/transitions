import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-about',
  templateUrl: './menu-about.component.html',
  styleUrls: ['./menu-about.component.css']
})
export class MenuAboutComponent implements OnInit {

  menuItemId = 2
  subMenuItemId=0;

  detailHeaderName = 'header-about'
  detailListName="list-about"
  title= "My Meandering Journey"

  constructor() { }

  ngOnInit(): void {
  }

}
