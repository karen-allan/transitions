import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-print-sub-form-caregiver',
  templateUrl: './print-sub-form-caregiver.component.html',
  styleUrl: './print-sub-form-caregiver.component.css'
})
export class PrintSubFormCaregiverComponent {

  @Input() @Output() client: Client;

}
