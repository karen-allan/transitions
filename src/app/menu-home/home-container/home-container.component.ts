import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  menuItemId = 1
  subMenuItemId = 0

  detailHeaderName = 'header-home'
  detailListName="list-home"

  constructor() { }

  ngOnInit(): void {
  }

}
