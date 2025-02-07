import {Component, Input, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {

  @Input() @Output() client: Client;

}
