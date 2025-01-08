import { Component } from '@angular/core';
import * as Constants from 'src/app/ts-files/constants'

@Component({
  selector: 'app-consider-cpr-directive-container',
  templateUrl: './consider-cpr-directive-container.component.html',
  styleUrl: './consider-cpr-directive-container.component.css'
})
export class ConsiderCprDirectiveContainerComponent {

  menuItemId:number  = 1;
  subMenuItemId:number = 13;

  detailHeaderName="header-consider-cpr"
  title=Constants.KNOW_YOUR_RIGHTS
  quote: string='Planning is bringing the future into the present so that you can do something about it now.';
  author: string='Alan Lakein';
}
