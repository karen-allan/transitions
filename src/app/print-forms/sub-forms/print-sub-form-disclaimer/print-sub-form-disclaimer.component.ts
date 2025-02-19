import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-print-sub-form-disclaimer',
  templateUrl: './print-sub-form-disclaimer.component.html',
  styleUrl: './print-sub-form-disclaimer.component.css'
})
export class PrintSubFormDisclaimerComponent {

  @Input() @Output() client: Client;

}
