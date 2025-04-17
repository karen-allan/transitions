import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/ts-files/constants'
@Component({
  selector: 'app-about-practitioner-container',
  templateUrl: './about-practitioner-container.component.html',
  styleUrls: ['./about-practitioner-container.component.css']
})
export class AboutPractitionerContainerComponent implements OnInit {

  menuItemId:number   = 4;
  subMenuItemId:number = 40;

  title= Constants.ABOUT_US
  quote: string='The dignity we seek in dying must be found in the dignity we seek in living.';
  author: string='Sherwin B Nuland';

  constructor() { }

  ngOnInit(): void {
  }

}
