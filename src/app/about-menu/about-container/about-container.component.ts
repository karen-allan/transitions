import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-container',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.css']
})
export class AboutContainerComponent implements OnInit {

  menuItemId = 2
  subMenuItemId = 20

  detailHeaderName = 'header-about'
  detailListName="list-about"
  title= "About my Journey"

  constructor() { }

  ngOnInit(): void {
  }

}
