import {Component, Input} from '@angular/core';
import {Client} from "../../../../ts-files/client";
import {CAREGIVER_RESPONSES} from "../../../../ts-files/caregiver-responses";
import {CaregiverResponse} from "../../../../ts-files/caregiver-response";

@Component({
  selector: 'app-screen-sub-form-caregiver',
  templateUrl: './screen-sub-form-caregiver.component.html',
  styleUrl: './screen-sub-form-caregiver.component.css'
})
export class ScreenSubFormCaregiverComponent {

  @Input() client: Client;
  response: CaregiverResponse = CAREGIVER_RESPONSES[0];

}
