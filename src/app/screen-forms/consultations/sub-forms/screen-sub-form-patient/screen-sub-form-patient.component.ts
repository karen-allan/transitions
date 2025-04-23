import {Component, Input} from '@angular/core';
import {Client} from "../../../../ts-files/client";
import {PatientResponse} from "../../../../ts-files/patient-response";
import {PATIENT_RESPONSES} from "../../../../ts-files/patient-responses";


@Component({
  selector: 'app-screen-sub-form-patient',
  templateUrl: './screen-sub-form-patient.component.html',
  styleUrl: './screen-sub-form-patient.component.css'
})
export class ScreenSubFormPatientComponent {

  @Input() client: Client;
  response: PatientResponse = PATIENT_RESPONSES[0];
}
