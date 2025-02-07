import {Component, Input, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.css'
})
export class PlanningComponent {

  @Input() @Output() client: Client;

}
