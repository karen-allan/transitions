import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../../ts-files/client";
import {PlannerResponse} from "../../../../ts-files/planner-response";
import {PLANNER_RESPONSES} from "../../../../ts-files/planner-responses";

@Component({
  selector: 'app-print-sub-form-planner',
  templateUrl: './print-sub-form-planner.component.html',
  styleUrl: './print-sub-form-planner.component.css'
})
export class PrintSubFormPlannerComponent {

  @Input() @Output() client: Client;
  response: PlannerResponse = PLANNER_RESPONSES[0];

}
