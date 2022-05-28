import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-print-intake-for-patient',
  templateUrl: './print-intake-for-patient.component.html',
  styleUrls: ['./print-intake-for-patient.component.css']
})
export class PrintIntakeForPatientComponent implements OnInit {

  @Input() model: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
