import {Component, Input, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrl: './disclaimer.component.css'
})
export class DisclaimerComponent {

  @Input() @Output() client: Client;

}
