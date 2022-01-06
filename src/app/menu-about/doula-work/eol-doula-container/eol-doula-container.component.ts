import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eol-doula-container',
  templateUrl: './eol-doula-container.component.html',
  styleUrls: ['./eol-doula-container.component.css']
})
export class EolDoulaContainerComponent implements OnInit {

  menuItemId = 2
  subMenuItemId = 201

  detailHeaderName = 'header-about-eol-doula-care'
  title='My End of Life Experiences'

  constructor() { }

  ngOnInit(): void {
  }

}
