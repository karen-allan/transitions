import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-screen-sub-form-disclaimer',
  templateUrl: './screen-sub-form-disclaimer.component.html',
  styleUrl: './screen-sub-form-disclaimer.component.css'
})
export class ScreenSubFormDisclaimerComponent {

  @Input() @Output() client:Client;


  printProfile() {
    window.print();
  }
}
