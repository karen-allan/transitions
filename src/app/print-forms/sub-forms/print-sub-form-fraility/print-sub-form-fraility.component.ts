import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-print-sub-form-fraility',
  templateUrl: './print-sub-form-fraility.component.html',
  styleUrl: './print-sub-form-fraility.component.css'
})
export class PrintSubFormFrailityComponent {

  @Input() @Output() client: Client;

}
