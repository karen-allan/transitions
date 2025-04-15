import {Component, EventEmitter} from '@angular/core';
import {WishesWizard} from "../../../../ts-files/wishes-wizard";
import {MatDialogRef} from "@angular/material/dialog";
import * as Constants from "../../../../ts-files/constants";

@Component({
  selector: 'app-dialog-wish-list',
  templateUrl: './dialog-wish-list.component.html',
  styleUrl: './dialog-wish-list.component.css'
})
export class DialogWishListComponent {

  title=Constants.WRITE_WISH_LIST;
  modal:boolean=true;
  wishes:WishesWizard;
  public event: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<DialogWishListComponent>) { }

  /* *************************************************************************************************************** */
  /* Set in dialog=wish-list.ts */
  setWishes(wishes:WishesWizard, title:string) {
    this.wishes = wishes;
    // this.selectedQuestion = wishes.questions[0];
  }
}
