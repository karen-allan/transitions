import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-support-for-patient',
  templateUrl: './support-for-patient.component.html',
  styleUrls: ['./support-for-patient.component.css']
})
export class SupportForPatientComponent implements OnInit {

  @Input() model: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
