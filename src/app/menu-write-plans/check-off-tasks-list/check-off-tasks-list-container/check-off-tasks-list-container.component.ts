import { Component } from '@angular/core';
import * as Constants from 'src/app/ts-files/constants'

@Component({
  selector: 'app-check-off-tasks-list-container',
  templateUrl: './check-off-tasks-list-container.component.html',
  styleUrl: './check-off-tasks-list-container.component.css'
})
export class CheckOffTasksListContainerComponent {

  menuItemId:number  = 2;
  subMenuItemId:number = 23;

  lookupParent=Constants.TAKE_ACTION
  lookupChild1: string=Constants.WRITE_WISH_LIST
  lookupChild2: string=Constants.CHOOSE_YOUR_REPS
  lookupChild3: string=Constants.WRITE_ADVANCE_CARE_PLAN

  title= Constants.CREATE_YOUR_CHECK_LIST
  quote:string='At any time, you have the power to say: this is not how the story is going to end.';
  author:string='Christine Mason Miller';
}
