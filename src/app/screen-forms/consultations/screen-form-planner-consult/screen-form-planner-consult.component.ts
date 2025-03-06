import {Component, Input} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-screen-form-planner-consult',
  templateUrl: './screen-form-planner-consult.component.html',
  styleUrl: './screen-form-planner-consult.component.css'
})
export class ScreenFormPlannerConsultComponent {

  @Input() client: Client;


}
