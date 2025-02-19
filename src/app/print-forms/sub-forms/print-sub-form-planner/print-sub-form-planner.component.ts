import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-print-sub-form-planner',
  templateUrl: './print-sub-form-planner.component.html',
  styleUrl: './print-sub-form-planner.component.css'
})
export class PrintSubFormPlannerComponent {

  @Input() @Output() client: Client;

}
