import {Component, Input, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AdvanceDirective} from "../../../ts-files/advance_directive";
import {DialogDirectiveComponent} from "../../../dialogs/dialog-directive/dialog-directive.component";

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
    dialogConfig.maxWidth='1024px'
    dialogConfig.minWidth='960px'

    let modalDialog = this.matDialog.open(DialogDirectiveComponent, dialogConfig);

    modalDialog.componentInstance.setDirective(this.directive, this.title);
    modalDialog.componentInstance.event.subscribe(directives => {
      this.directive = directives.directive;
      this.printForm = directives.print;
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
