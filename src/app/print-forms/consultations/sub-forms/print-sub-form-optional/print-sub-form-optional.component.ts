import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../../ts-files/client";

@Component({
  selector: 'app-print-sub-form-optional',
  templateUrl: './print-sub-form-optional.component.html',
  styleUrl: './print-sub-form-optional.component.css'
})
export class PrintSubFormOptionalComponent {

  @Input() @Output() client: Client;

}
