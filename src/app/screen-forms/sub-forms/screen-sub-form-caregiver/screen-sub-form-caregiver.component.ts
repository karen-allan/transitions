import {Component, Input} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-screen-sub-form-caregiver',
  templateUrl: './screen-sub-form-caregiver.component.html',
  styleUrl: './screen-sub-form-caregiver.component.css'
})
export class ScreenSubFormCaregiverComponent {

  @Input() client: Client;

}
