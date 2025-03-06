import {Component, Input, OnInit, Output} from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogWishListComponent} from "../../../dialogs/dialog-wish-list/dialog-wish-list.component";

@Component({
  selector: 'app-make-wishes-overview',
  templateUrl: './make-wishes-overview.component.html',
  styleUrl: './make-wishes-overview.component.css'
})
export class MakeWishesOverviewComponent  {

  @Input() title:string='';
  @Input() quote:string='';
  @Input() author:string='';
  @Input() lookupParent1:string='';
  @Input() lookupChild1:string='';
  @Input() lookupParent2:string='';
  @Input() lookupChild2:string='';

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

