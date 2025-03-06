import {Component, Input} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-screen-form-caregiver-consult',
  templateUrl: './screen-form-caregiver-consult.component.html',
  styleUrl: './screen-form-caregiver-consult.component.css'
})
export class ScreenFormCaregiverConsultComponent {

  @Input() client: Client;


}
