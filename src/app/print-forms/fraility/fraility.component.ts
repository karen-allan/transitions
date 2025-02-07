import {Component, Input, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-fraility',
  templateUrl: './fraility.component.html',
  styleUrl: './fraility.component.css'
})
export class FrailityComponent {

  @Input() @Output() client: Client;

}
