import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-container',
  templateUrl: './about-me-container.component.html',
  styleUrls: ['./about-me-container.component.css']
})
export class AboutMeContainerComponent implements OnInit {

  menuItemId:number   = 2
  subMenuItemId = 20

  detailHeaderName = 'header-about-me'
  title= "How Did I Get Here?"
  detailListName="list-about"

  constructor() { }

  ngOnInit(): void {
  }

}
