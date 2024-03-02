import {Component, Input} from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {formatDate} from "@angular/common";
import {MakeWishesWizardComponent} from "../make-wishes-wizard/make-wishes-wizard.component";

@Component({
  selector: 'app-make-wishes-overview',
  templateUrl: './make-wishes-overview.component.html',
  styleUrl: './make-wishes-overview.component.css'
})
export class MakeWishesOverviewComponent {

  @Input() wishes:WishesWizard;
  @Input() title="";

  now:string;
  printForm:boolean=false;

  constructor(public matDialog: MatDialog) { }

  /* *************************************************************************************************************** */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    //dialogConfig.id = "modal-component";
    dialogConfig.id = "make-wishes-modal";

    let modalDialog = this.matDialog.open(MakeWishesWizardComponent, dialogConfig);
    modalDialog.componentInstance.setWishes(this.wishes);
  //  modalDialog.componentInstance.setDate(this.now);
  //  modalDialog.componentInstance.setDefaultName(this.wishes.client_name);
    modalDialog.componentInstance.event.subscribe(resp => {
      this.wishes = resp.wishes;
      this.printForm = resp.print;
      modalDialog.close();
    })
    modalDialog.afterClosed().subscribe(() => {this.printWishes();});
  }

  /* *************************************************************************************************************** */
  printWishes() {
    if (this.printForm) {
      window.print();
    }
  }

  /* *************************************************************************************************************** */
  getCurrentDate() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }
}
