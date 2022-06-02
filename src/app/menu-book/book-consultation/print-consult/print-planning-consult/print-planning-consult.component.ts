import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../../ts-files/client";

@Component({
  selector: 'app-print-planning-consult',
  templateUrl: './print-planning-consult.component.html',
  styleUrls: ['./print-planning-consult.component.css']
})
export class PrintPlanningConsultComponent implements OnInit {

  @Input() model: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
