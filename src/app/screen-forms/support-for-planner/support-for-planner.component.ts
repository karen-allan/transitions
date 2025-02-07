import {Component, Input, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-support-for-planner',
  templateUrl: './support-for-planner.component.html',
  styleUrl: './support-for-planner.component.css'
})
export class SupportForPlannerComponent {

  @Input() @Output() client:Client;

}
