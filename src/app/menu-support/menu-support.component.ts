import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-support',
  templateUrl: './menu-support.component.html',
  styleUrls: ['./menu-support.component.css']
})
export class MenuSupportComponent implements OnInit {

  menuItemId = 5
  subMenuItemId=0

  detailHeaderName = "header-support"
  detailListName = "list-support"
  title = "Support and Care"

  constructor() { }

  ngOnInit(): void {
  }

}
