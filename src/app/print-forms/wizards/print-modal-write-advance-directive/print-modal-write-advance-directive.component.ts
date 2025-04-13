import {Component, Input} from '@angular/core';
import {AdvanceDirective} from "../../../ts-files/advance_directive";
import * as Constants from "../../../ts-files/constants";

@Component({
  selector: 'app-print-modal-write-advance-directive',
  templateUrl: './print-modal-write-advance-directive.component.html',
  styleUrl: './print-modal-write-advance-directive.component.css'
})
export class PrintModalWriteAdvanceDirectiveComponent {

  @Input() directive: AdvanceDirective;
  @Input() now:string;
  title=Constants.WRITE_ADVANCE_CARE_PLAN;

}
