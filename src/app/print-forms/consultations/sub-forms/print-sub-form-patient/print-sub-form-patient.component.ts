import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../../ts-files/client";

@Component({
  selector: 'app-print-sub-form-patient',
  templateUrl: './print-sub-form-patient.component.html',
  styleUrl: './print-sub-form-patient.component.css'
})
export class PrintSubFormPatientComponent {

  @Input() @Output() client: Client;

}
