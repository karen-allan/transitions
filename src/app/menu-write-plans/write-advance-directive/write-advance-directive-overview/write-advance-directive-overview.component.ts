import {Component, Input, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AdvanceDirective} from "../../../ts-files/advance_directive";
import {ScreenModalWriteAdvanceDirectiveComponent} from "../../../screen-modals/screen-modal-write-advance-directive/screen-modal-write-advance-directive.component";

@Component({
  selector: 'app-write-advance-directive-overview',
  templateUrl: './write-advance-directive-overview.component.html',
  styleUrl: './write-advance-directive-overview.component.css'
})
export class WriteAdvanceDirectiveOverviewComponent {

  @Input() lookupParent:string='';
  @Input() lookupChild1:string='';
  @Input() lookupChild2:string='';

  @Input() title:string='';
  @Input() quote:string='';
  @Input() author:string='';

  @Input() @Output() directive:AdvanceDirective;

  printForm:boolean=false;

  constructor(public matDialog: MatDialog) { }

  /* *************************************************************************************************************** */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "advance-directive-modal";

    let modalDialog = this.matDialog.open(ScreenModalWriteAdvanceDirectiveComponent, dialogConfig);

    modalDialog.componentInstance.setDirective(this.directive);
    modalDialog.componentInstance.event.subscribe(resp => {
      this.directive = resp.directive;
      this.printForm = resp.print;
      modalDialog.close();
    })
    modalDialog.afterClosed().subscribe(() => {this.printAdvanceDirectiveForm();});
  }

  /* *************************************************************************************************************** */
  printAdvanceDirectiveForm() {
    if (this.printForm) {
      window.print();
    }
  }
}
