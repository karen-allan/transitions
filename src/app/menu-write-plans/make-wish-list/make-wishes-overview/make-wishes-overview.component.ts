import {Component, Input, Output} from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogWishListComponent} from "../../../screen-forms/wizards/dialogs/dialog-wish-list/dialog-wish-list.component";
import {PathObject} from "../../../ts-files/pathObject";

@Component({
  selector: 'app-make-wishes-overview',
  templateUrl: './make-wishes-overview.component.html',
  styleUrl: './make-wishes-overview.component.css'
})
export class MakeWishesOverviewComponent  {

  @Input() title:string='';
  @Input() quote:string='';
  @Input() author:string='';

  @Input() pathObject:PathObject;
  @Input() @Output() wishes:WishesWizard;

  printForm:boolean=false;
  constructor(public matDialog: MatDialog) {}

  /* *************************************************************************************************************** */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "make-wishes-modal";
    dialogConfig.maxWidth='1024px'
    dialogConfig.minWidth='960px'
    dialogConfig.height='850px'

    /* named and defined in wizard.css */
    let modalDialog = this.matDialog.open(DialogWishListComponent, dialogConfig);
    modalDialog.componentInstance.setWishes(this.wishes, this.title);
    modalDialog.componentInstance.event.subscribe(wishes => {
    this.wishes = wishes.wishes;
    this.printForm = wishes.print;
    modalDialog.close();
    })
    modalDialog.afterClosed().subscribe(() => {this.printWishesForm();});
  }

  /* *************************************************************************************************************** */
  printWishesForm() {
    if (this.printForm) {
      window.print();
    }
  }
}

