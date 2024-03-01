import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {RepNine} from "../../../ts-files/rep-nine";
import {ChooseYourRepWizardComponent} from "../choose-your-rep-wizard/choose-your-rep-wizard.component";

@Component({
  selector: 'app-choose-your-rep-overview',
  templateUrl: './choose-your-rep-overview.component.html',
  styleUrls: ['./choose-your-rep-overview.component.css']
})
export class ChooseYourRepOverviewComponent implements OnInit {

  @Input() title:string='';
  @Input() @Output() rep:RepNine;

 // page:number=0;
  printForm:boolean=false;

  constructor(public matDialog: MatDialog) { }


  /* *************************************************************************************************************** */
  ngOnInit(): void {

  }


  /* *************************************************************************************************************** */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "rep-nine-modal";
    //  dialogConfig.id = "modal-component";

    let modalDialog = this.matDialog.open(ChooseYourRepWizardComponent, dialogConfig);

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
