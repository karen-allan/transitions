import {Component, Input, Output} from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogRepsComponent} from "../../../screen-forms/wizards/dialogs/dialog-reps/dialog-reps.component";
import {PathObject} from "../../../ts-files/pathObject";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-choose-your-rep-overview',
  templateUrl: './choose-your-rep-overview.component.html',
  styleUrls: ['./choose-your-rep-overview.component.css'],

})
export class ChooseYourRepOverviewComponent {

  @Input() title:string='';
  @Input() quote:string='';
  @Input() author:string='';

  @Input() pathObject:PathObject;
  @Input() @Output() rep:RepNine;

  /* less than 60 */
  metaTitle='Choose Representative | End of Life Advocate'

  /* less than 160 */
  metaDesc='Follow our free to use wizard to select who you would most trust to help you and advocate for you in a medical emergency.'

  printForm:boolean=false;

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
    dialogConfig.id = "choose-rep-modal";
    dialogConfig.maxWidth='768px'

    /* named and defined in wizard.css */
    let modalDialog = this.matDialog.open(DialogRepsComponent, dialogConfig);

    modalDialog.componentInstance.setRep(this.rep);
    modalDialog.componentInstance.event.subscribe(representative => {
      this.rep = representative.rep;
      this.printForm = representative.print;
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
