import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-print-sub-form-demographic',
  templateUrl: './print-sub-form-demographic.component.html',
  styleUrl: './print-sub-form-demographic.component.css'
})
export class PrintSubFormDemographicComponent {

  @Input() @Output() client: Client;

}
