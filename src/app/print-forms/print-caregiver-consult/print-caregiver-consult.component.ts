import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-print-caregiver-consult',
  templateUrl: './print-caregiver-consult.component.html',
  styleUrls: ['./print-caregiver-consult.component.css']
})
export class PrintCaregiverConsultComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
