import {Component, Input} from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {formatDate} from "@angular/common";
import * as Constants from "../../../ts-files/constants";

@Component({
  selector: 'app-print-modal-make-wish-list',
  templateUrl: './print-modal-make-wish-list.component.html',
  styleUrl: './print-modal-make-wish-list.component.css'
})
export class PrintModalMakeWishListComponent {

  @Input() wishes:WishesWizard;
  @Input() now:string;
  title=Constants.WRITE_WISH_LIST;

  constructor() { }

  ngOnInit(): void {
    this.getCurrentDate();
  }

  /* *************************************************************************************************************** */
  getCurrentDate() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

}
