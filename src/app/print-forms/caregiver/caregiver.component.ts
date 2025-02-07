import {Component, Input, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-caregiver',
  templateUrl: './caregiver.component.html',
  styleUrl: './caregiver.component.css'
})
export class CaregiverComponent {

  @Input() @Output() client: Client;

}
