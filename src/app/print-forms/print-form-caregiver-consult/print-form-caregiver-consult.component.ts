import {Component, Input} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-print-form-caregiver-consult',
  templateUrl: './print-form-caregiver-consult.component.html',
  styleUrl: './print-form-caregiver-consult.component.css'
})
export class PrintFormCaregiverConsultComponent {

  @Input() client: Client;

  caregiver:string="caregiver"

}
