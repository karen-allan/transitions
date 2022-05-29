import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../../ts-files/client";

@Component({
  selector: 'app-print-intake-for-plans',
  templateUrl: './print-intake-for-plans.component.html',
  styleUrls: ['./print-intake-for-plans.component.css']
})
export class PrintIntakeForPlansComponent implements OnInit {

  @Input() model: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
