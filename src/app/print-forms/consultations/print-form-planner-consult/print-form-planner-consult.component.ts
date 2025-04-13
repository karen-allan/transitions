import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-print-form-planner-consult',
  templateUrl: './print-form-planner-consult.component.html',
  styleUrl: './print-form-planner-consult.component.css'
})
export class PrintFormPlannerConsultComponent {

  @Input() @Output() client: Client;

  planner:string="planner"

}
