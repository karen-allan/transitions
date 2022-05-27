import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-eol-doula-container',
  templateUrl: './about-eol-doula-container.component.html',
  styleUrls: ['./about-eol-doula-container.component.css']
})
export class AboutEolDoulaContainerComponent implements OnInit {

  menuItemId:number   = 2;
  subMenuItemId:number = 22;

  detailHeaderName = 'header-about-eol-doula'
  title='End-of-Life Work'
  detailListName="list-about"

  constructor() { }

  ngOnInit(): void {
  }

}
