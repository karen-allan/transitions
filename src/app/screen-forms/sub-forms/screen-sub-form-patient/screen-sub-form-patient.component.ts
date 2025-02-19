import {Component, Input} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-screen-sub-form-patient',
  templateUrl: './screen-sub-form-patient.component.html',
  styleUrl: './screen-sub-form-patient.component.css'
})
export class ScreenSubFormPatientComponent {

  @Input() client: Client;

}
