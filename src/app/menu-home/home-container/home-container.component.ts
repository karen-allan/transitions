import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  menuItemId:number   = 1
  subMenuItemId = 0

  detailHeaderName = 'header-home'
  title='Our Modern World: How Healthy Are We?'

  constructor() { }

  ngOnInit(): void {
  }

}
