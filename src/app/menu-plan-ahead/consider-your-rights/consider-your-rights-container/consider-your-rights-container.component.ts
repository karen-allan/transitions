import { Component } from '@angular/core';
import * as Constants from "../../../ts-files/constants";

@Component({
  selector: 'app-consider-your-rights-container',
  templateUrl: './consider-your-rights-container.component.html',
  styleUrl: './consider-your-rights-container.component.css'
})

export class ConsiderYourRightsContainerComponent {
  menuItemId:number  = 1;
  subMenuItemId:number = 13;

  detailHeaderName="header-consider-cpr"
  title=Constants.KNOW_YOUR_RIGHTS
  quote: string='Planning is bringing the future into the present so that you can do something about it now.';
  author: string='Alan Lakein';
}
