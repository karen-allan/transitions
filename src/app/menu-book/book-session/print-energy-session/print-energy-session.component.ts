import {Component, Input, OnInit} from '@angular/core';
import { Client } from '../../../ts-files/client';

@Component({
  selector: 'app-print-energy-session',
  templateUrl: './print-energy-session.component.html',
  styleUrls: ['./print-energy-session.component.css']
})
export class PrintEnergySessionComponent implements OnInit {

  @Input() model: Client;

  constructor() { }

  ngOnInit(): void {
  }

  setModel(newModel: Client) {
    this.model = newModel;
  }

}
