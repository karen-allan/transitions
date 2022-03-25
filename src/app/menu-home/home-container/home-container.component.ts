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
  title='Our Modern World - Are We Really Healthy?'

  constructor() { }

  ngOnInit(): void {
  }

}
