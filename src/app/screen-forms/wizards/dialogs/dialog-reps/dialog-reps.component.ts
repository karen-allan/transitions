import {Component, EventEmitter} from '@angular/core';
import {RepNine} from "../../../../ts-files/rep-nine";
import * as Constants from "../../../../ts-files/constants";
import {CHOOSE_YOUR_REPS} from "../../../../ts-files/constants";

@Component({
  selector: 'app-dialog-reps',
  templateUrl: './dialog-reps.component.html',
  styleUrl: './dialog-reps.component.css'
})
export class DialogRepsComponent {

  title=Constants.CHOOSE_YOUR_REPS;
  modal:boolean=true;
  rep:RepNine;
  public event: EventEmitter<any> = new EventEmitter();

  /* *************************************************************************************************************** */
  /* Set in dialog-reps.ts */
  setRep(rep:RepNine, title:string) {
    this.rep = rep;
  }
}
