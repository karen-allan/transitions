import {Component, Input, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AdvanceDirective} from "../../../ts-files/advance_directive";
import {DialogDirectiveComponent} from "../../../screen-forms/wizards/dialogs/dialog-directive/dialog-directive.component";
import {PathObject} from "../../../ts-files/pathObject";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-write-advance-directive-overview',
  templateUrl: './write-advance-directive-overview.component.html',
  styleUrl: './write-advance-directive-overview.component.css'
})
export class WriteAdvanceDirectiveOverviewComponent {

  @Input() title:string='';
  @Input() quote:string='';
  @Input() author:string='';

  @Input() pathObject:PathObject;
  @Input() @Output() directive:AdvanceDirective;

  printForm:boolean=false;

  /* less than 60 */
  metaTitle='Advance Plan Wizard| Make a Plan'

  /* less than 160 */

  metaDesc='Complete our free advance care plan or directive wizard to put in writing what procedures you would accept or reject medically.'

  constructor(public matDialog: MatDialog, private titleService: Title, private metaService:Meta) { }

  /*********************************************************************************/
  ngOnInit(): void {
//alert("metatitle is" + this.metaTitle)
    this.titleService.setTitle(this.metaTitle);
    this.metaService.addTags([
      {name: 'description', content: this.metaDesc},
      {name: 'robots', content: 'index, follow'},
      {name:"viewport", content:"width=device-width,initial-scale=1" }
    ]);
  }

  /* *************************************************************************************************************** */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "advance-directive-modal";
    dialogConfig.maxWidth='1024px'
    dialogConfig.minWidth='960px'
    dialogConfig.height='870px'

    let modalDialog = this.matDialog.open(DialogDirectiveComponent, dialogConfig);

    modalDialog.componentInstance.setDirective(this.directive);
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
