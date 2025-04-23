import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../../ts-files/client";
import {PATIENT_RESPONSES} from "../../../../ts-files/patient-responses";
import {PatientResponse} from "../../../../ts-files/patient-response";

@Component({
  selector: 'app-print-sub-form-patient',
  templateUrl: './print-sub-form-patient.component.html',
  styleUrl: './print-sub-form-patient.component.css'
})
export class PrintSubFormPatientComponent {

  @Input() @Output() client: Client;

  response: PatientResponse = PATIENT_RESPONSES[0];
}
