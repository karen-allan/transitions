import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-practitioner-container',
  templateUrl: './about-practitioner-container.component.html',
  styleUrls: ['./about-practitioner-container.component.css']
})
export class AboutPractitionerContainerComponent implements OnInit {

  menuItemId:number   = 1;
  subMenuItemId:number = 11;

  detailHeaderName = 'header-about-practitioner'
  title='The Doula Path'

  constructor() { }

  ngOnInit(): void {
  }

}
