import {Component, Input, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrl: './demographic.component.css'
})
export class DemographicComponent {

  @Input() @Output() client: Client;

}
