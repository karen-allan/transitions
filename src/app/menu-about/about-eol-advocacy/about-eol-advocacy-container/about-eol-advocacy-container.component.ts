import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/ts-files/constants'

@Component({
  selector: 'app-about-eol-advocacy-container',
  templateUrl: './about-eol-advocacy-container.component.html',
  styleUrls: ['./about-eol-advocacy-container.component.css']
})
export class AboutEolAdvocacyContainerComponent implements OnInit {

  menuItemId:number   = 4;
  subMenuItemId:number = 41;

  detailHeaderName = 'header-about-eol-advocacy';
  title= Constants.ABOUT_HOW_WE_SUPPORT_YOU
  quote: string='In protecting oneself, others are protected. In protecting others, oneself is protected.';
  author: string='Gautama Buddha';

  constructor() { }

  ngOnInit(): void {

  }

}
