import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-eol-doula-container',
  templateUrl: './about-eol-doula-container.component.html',
  styleUrls: ['./about-eol-doula-container.component.css']
})
export class AboutEolDoulaContainerComponent implements OnInit {

  menuItemId:number   = 1;
  subMenuItemId:number = 12;

  detailHeaderName = 'header-about-doula-pract'
  title='End-of-Life Work'


  constructor() { }

  ngOnInit(): void {
  }

}
