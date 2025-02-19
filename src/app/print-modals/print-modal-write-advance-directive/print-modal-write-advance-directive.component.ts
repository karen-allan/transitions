import {Component, Input} from '@angular/core';
import {AdvanceDirective} from "../../ts-files/advance_directive";

@Component({
  selector: 'app-print-modal-write-advance-directive',
  templateUrl: './print-modal-write-advance-directive.component.html',
  styleUrl: './print-modal-write-advance-directive.component.css'
})
export class PrintModalWriteAdvanceDirectiveComponent {

  @Input() directive: AdvanceDirective;

}
