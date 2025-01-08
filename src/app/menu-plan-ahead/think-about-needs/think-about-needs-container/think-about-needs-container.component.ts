import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/ts-files/constants'

@Component({
  selector: 'app-think-about-needs-container',
  templateUrl: './think-about-needs-container.component.html',
  styleUrls: ['./think-about-needs-container.component.css']
})
export class ThinkAboutNeedsContainerComponent {

  menuItemId:number  = 1;
  subMenuItemId:number = 10;

  title=Constants.THINK_ABOUT_YOUR_NEEDS
  quote: string='Someone\'s sitting in the shade today because someone planted a tree long ago.';
  author: string='Warren Buffett';

}
