import {Component, Input, OnInit} from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {formatDate} from "@angular/common";
import {ThinkAboutNeedsWizardComponent} from "../think-about-needs-wizard/think-about-needs-wizard.component";

@Component({
  selector: 'app-think-about-needs-overview',
  templateUrl: './think-about-needs-overview.component.html',
  styleUrls: ['./think-about-needs-overview.component.css']
})
export class ThinkAboutNeedsOverviewComponent implements OnInit {

  @Input() title:string='';
  @Input() wishes:WishesWizard;

  now:string;
  page:number=0;
  printForm:boolean=false;

  constructor(public matDialog: MatDialog) { }
  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.setClientDefaults();
    this.getCurrentDate();
  }

  /* *************************************************************************************************************** */
  setClientDefaults() {
    this.wishes.client_name='';
  }

  /* *************************************************************************************************************** */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";

    let modalDialog = this.matDialog.open(ThinkAboutNeedsWizardComponent, dialogConfig);
    modalDialog.componentInstance.setWishes(this.wishes);
    modalDialog.componentInstance.setDate(this.now);
    modalDialog.componentInstance.setDefaultName(this.wishes.client_name);
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
