import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-print-intake-for-caregiver',
  templateUrl: './print-intake-for-caregiver.component.html',
  styleUrls: ['./print-intake-for-caregiver.component.css']
})
export class PrintIntakeForCaregiverComponent implements OnInit {

  @Input() model: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
