import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-path-container',
  templateUrl: './about-path-container.component.html',
  styleUrls: ['./about-path-container.component.css']
})
export class AboutPathContainerComponent implements OnInit {

  menuItemId = 2
  subMenuItemId = 20

  detailHeaderName = 'header-about'
  detailListName="list-about"
  title= "About my Journey"

  constructor() { }

  ngOnInit(): void {
  }

}
