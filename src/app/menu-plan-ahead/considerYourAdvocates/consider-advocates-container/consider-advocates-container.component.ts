import {Component} from '@angular/core';
import * as Constants from 'src/app/ts-files/constants'

@Component({
  selector: 'app-consider-advocates-container',
  templateUrl: './consider-advocates-container.component.html',
  styleUrl: './consider-advocates-container.component.css'
})
export class ConsiderAdvocatesContainerComponent {

  menuItemId:number  = 1;
  subMenuItemId:number = 11;

  detailHeaderName="header-consider-reps"
  title=Constants.CONSIDER_YOUR_ADVOCATES
  quote: string='The best index to a person\'s character is how they treat people who can\'t do them any good and how they treat people\n' +
      '                who can\'t fight back.';
  author: string='Abigail Van Buren';

}
