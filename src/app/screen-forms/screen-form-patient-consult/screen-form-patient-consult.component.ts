import {Component, Input} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-screen-form-patient-consult',
  templateUrl: './screen-form-patient-consult.component.html',
  styleUrl: './screen-form-patient-consult.component.css'
})
export class ScreenFormPatientConsultComponent {

  @Input() client: Client;


}
