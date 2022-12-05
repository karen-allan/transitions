import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-eol-advocacy-container',
  templateUrl: './about-eol-advocacy-container.component.html',
  styleUrls: ['./about-eol-advocacy-container.component.css']
})
export class AboutEolAdvocacyContainerComponent implements OnInit {

  menuItemId:number   = 1;
  subMenuItemId:number = 10;

  detailHeaderName = 'header-about-eol-advocacy';
  title='About End-Of-Life';
  subtitle = 'Doulas'

  constructor() { }

  ngOnInit(): void {

  }

}
