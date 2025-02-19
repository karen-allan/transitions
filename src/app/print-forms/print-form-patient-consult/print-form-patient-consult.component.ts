import {Component, Input} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-print-form-patient-consult',
  templateUrl: './print-form-patient-consult.component.html',
  styleUrl: './print-form-patient-consult.component.css'
})
export class PrintFormPatientConsultComponent {

  @Input() client: Client;

  patient:string="patient"

}
