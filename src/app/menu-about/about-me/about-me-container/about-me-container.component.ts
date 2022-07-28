import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-container',
  templateUrl: './about-me-container.component.html',
  styleUrls: ['./about-me-container.component.css']
})
export class AboutMeContainerComponent implements OnInit {

  menuItemId:number   = 1
  subMenuItemId = 10

  detailHeaderName = 'header-about-me'
  title= "From There to Here"

  constructor() { }

  ngOnInit(): void {
  }

}
