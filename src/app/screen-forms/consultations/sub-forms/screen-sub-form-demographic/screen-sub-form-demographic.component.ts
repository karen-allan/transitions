import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../../ts-files/client";
import {DataService} from "../../../../service-files/data.service";

@Component({
  selector: 'app-screen-sub-form-demographic',
  templateUrl: './screen-sub-form-demographic.component.html',
  styleUrl: './screen-sub-form-demographic.component.css'
})
export class ScreenSubFormDemographicComponent {

  @Input() @Output() client: Client;
  now:string;

  constructor() { }


}
