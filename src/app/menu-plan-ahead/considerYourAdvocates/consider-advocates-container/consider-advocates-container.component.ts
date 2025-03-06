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


  quote: string='Ask for help not because you are weak, but because you want to remain strong.';
  author: string='Les Brown';



}
