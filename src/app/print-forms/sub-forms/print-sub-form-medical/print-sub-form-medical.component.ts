import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-print-sub-form-medical',
  templateUrl: './print-sub-form-medical.component.html',
  styleUrl: './print-sub-form-medical.component.css'
})
export class PrintSubFormMedicalComponent {

  @Input() @Output() client: Client;

}
