import {Component, Input} from '@angular/core';
import {RepNine} from "../../../../ts-files/rep-nine";
import {WishesWizard} from "../../../../ts-files/wishes-wizard";
import {AdvanceDirective} from "../../../../ts-files/advance_directive";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrl: './dialog-header.component.css'
})
export class DialogHeaderComponent {

  @Input() title: string;
  @Input() rep: RepNine;
  @Input() wishes:WishesWizard;
  @Input() directive: AdvanceDirective;
  @Input() modal:boolean;


  now:string;
  name:string;

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.getCurrentDate();
  }

  /* *************************************************************************************************************** */
  getCurrentDate() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

}
