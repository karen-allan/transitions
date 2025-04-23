import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../../ts-files/client";
import {CaregiverResponse} from "../../../../ts-files/caregiver-response";
import {CAREGIVER_RESPONSES} from "../../../../ts-files/caregiver-responses";

@Component({
  selector: 'app-print-sub-form-caregiver',
  templateUrl: './print-sub-form-caregiver.component.html',
  styleUrl: './print-sub-form-caregiver.component.css'
})
export class PrintSubFormCaregiverComponent {

  @Input() @Output() client: Client;
  response: CaregiverResponse = CAREGIVER_RESPONSES[0];

}
