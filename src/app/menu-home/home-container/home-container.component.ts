import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  menuItemId:number = 0
  subMenuItemId = 0

  detailHeaderName = 'header-home'
  title='Death Today'
  slogan='are we doing our best?'

  constructor() { }

  ngOnInit(): void {
  }

}
