import {Component, Input} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-screen-sub-form-medical',
  templateUrl: './screen-sub-form-medical.component.html',
  styleUrl: './screen-sub-form-medical.component.css'
})
export class ScreenSubFormMedicalComponent {

  @Input()  client: Client;

}
