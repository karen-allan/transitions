import {Component, EventEmitter} from '@angular/core';
import {AdvanceDirective} from "../../../../ts-files/advance_directive";
import * as Constants from "../../../../ts-files/constants";

@Component({
  selector: 'app-dialog-directive',
  templateUrl: './dialog-directive.component.html',
  styleUrl: './dialog-directive.component.css'
})


export class DialogDirectiveComponent {

  title=Constants.WRITE_ADVANCE_CARE_PLAN;
  modal:boolean=true;
  directive:AdvanceDirective;
  public event: EventEmitter<any> = new EventEmitter();


  /* *************************************************************************************************************** */
  /* Set in  dialog-directive.ts */
  setDirective(directive:AdvanceDirective) {
    this.directive = directive;
  }
}
