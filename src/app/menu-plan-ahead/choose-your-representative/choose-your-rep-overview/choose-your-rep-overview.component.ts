import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {formatDate} from "@angular/common";
import {RepNine} from "../../../ts-files/rep-nine";
import {ChooseYourRepWizardComponent} from "../choose-your-rep-wizard/choose-your-rep-wizard.component";
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-choose-your-rep-overview',
  templateUrl: './choose-your-rep-overview.component.html',
  styleUrls: ['./choose-your-rep-overview.component.css']
})
export class ChooseYourRepOverviewComponent implements OnInit {

  @Input() title:string='';
  @Input() @Output() rep:RepNine;

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
     // this.rep.client_name='';
  }

  /* *************************************************************************************************************** */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";

    let modalDialog = this.matDialog.open(ChooseYourRepWizardComponent, dialogConfig);

    modalDialog.componentInstance.setRep(this.rep);
    modalDialog.componentInstance.setDate();
    modalDialog.componentInstance.setLegalDate(this.rep.signing_date);
    modalDialog.componentInstance.setDefaultName(this.rep.client_name);
    modalDialog.componentInstance.setDefaultAddress(this.rep.client_address);
    modalDialog.componentInstance.event.subscribe(resp => {
      this.rep = resp.rep;
      this.printForm = resp.print;
      modalDialog.close();
    })
    modalDialog.afterClosed().subscribe(() => {this.printRepNineForm();});
  }

  /* *************************************************************************************************************** */
  printRepNineForm() {
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
