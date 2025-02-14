import {Component, Input, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {RepNine} from "../../../ts-files/rep-nine";
import {ScreenModalChooseYourRepComponent} from "../../../screen-modals/screen-modal-choose-your-rep/screen-modal-choose-your-rep.component";


@Component({
  selector: 'app-choose-your-rep-overview',
  templateUrl: './choose-your-rep-overview.component.html',
  styleUrls: ['./choose-your-rep-overview.component.css']
})
export class ChooseYourRepOverviewComponent {

  @Input() title:string='';
  @Input() quote:string='';
  @Input() author:string='';
  @Input() lookupParent1:string='';
  @Input() lookupChild1:string='';
  @Input() lookupParent2:string='';
  @Input() lookupChild2:string='';

  @Input() @Output() rep:RepNine;

  printForm:boolean=false;

  constructor(public matDialog: MatDialog) { }

  /* *************************************************************************************************************** */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "choose-rep-nine-modal";
   /* dialogConfig.maxWidth=  '900px';
    dialogConfig.minWidth= '900px';*/

    /* named and defined in wizard.css */
    let modalDialog = this.matDialog.open(ScreenModalChooseYourRepComponent, dialogConfig);

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
