import {Component, Input, Output} from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ChangeYourRepWizardComponent} from "../change-your-rep-wizard/change-your-rep-wizard.component";

@Component({
  selector: 'app-change-your-rep-overview',
  templateUrl: './change-your-rep-overview.component.html',
  styleUrl: './change-your-rep-overview.component.css'
})
export class ChangeYourRepOverviewComponent {

  @Input() title:string='';
  @Input() @Output() rep:RepNine;

  printForm:boolean=false;

  constructor(public matDialog: MatDialog) { }

  /* *************************************************************************************************************** */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "change-rep-nine-modal";

    let modalDialog   = this.matDialog.open(ChangeYourRepWizardComponent, dialogConfig);
    modalDialog.componentInstance.setRep(this.rep);

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

}
