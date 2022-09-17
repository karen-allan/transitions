import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-print-patient-consult',
  templateUrl: './print-patient-consult.component.html',
  styleUrls: ['./print-patient-consult.component.css']
})
export class PrintPatientConsultComponent implements OnInit {

  @Input() model: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
