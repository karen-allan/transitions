import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-eol-doula-container',
  templateUrl: './about-eol-doula-container.component.html',
  styleUrls: ['./about-eol-doula-container.component.css']
})
export class AboutEolDoulaContainerComponent implements OnInit {

  menuItemId = 2
  subMenuItemId = 22

  detailHeaderName = 'header-about-eol-doula'
  title='Being an End of Life Doula'
  detailListName="list-about"

  constructor() { }

  ngOnInit(): void {
  }

}
