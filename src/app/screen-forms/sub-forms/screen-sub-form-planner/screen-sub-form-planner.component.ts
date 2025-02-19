import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-screen-sub-form-planner',
  templateUrl: './screen-sub-form-planner.component.html',
  styleUrl: './screen-sub-form-planner.component.css'
})
export class ScreenSubFormPlannerComponent {

  @Input() @Output() client:Client;

}
