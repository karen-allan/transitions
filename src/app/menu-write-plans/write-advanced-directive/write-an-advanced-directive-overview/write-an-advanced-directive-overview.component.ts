import {Component, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {formatDate} from "@angular/common";
import {RepNine} from "../../../ts-files/rep-nine";
import {ChooseYourRepWizardComponent} from "../../choose-your-rep/choose-your-rep-wizard/choose-your-rep-wizard.component";
import {WriteAnAdvancedDirectiveWizardComponent} from "../write-an-advanced-directive-wizard/write-an-advanced-directive-wizard.component";

@Component({
  selector: 'app-write-an-advanced-directive-overview',
  templateUrl: './write-an-advanced-directive-overview.component.html',
  styleUrl: './write-an-advanced-directive-overview.component.css'
})

export class WriteAnAdvancedDirectiveOverviewComponent  implements OnInit {

  @Input() title:string='';
  @Input() @Output() rep:RepNine;

  sectionSelected: string ='';
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
    dialogConfig.id = "rep-nine-modal";
    //  dialogConfig.id = "modal-component";

    let modalDialog = this.matDialog.open(WriteAnAdvancedDirectiveWizardComponent, dialogConfig);

    modalDialog.componentInstance.setRep(this.rep);
    modalDialog.componentInstance.setDate();
    modalDialog.componentInstance.setLegalDate(this.rep.signing_date);
    /* these 2 below will be removed
    modalDialog.componentInstance.setDefaultName(this.rep.client_name);
    modalDialog.componentInstance.setDefaultAddress(this.rep.client_address);
    */
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
