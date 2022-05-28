import {Component, Input, OnInit} from '@angular/core';
import { Client } from '../../../ts-files/client';

@Component({
  selector: 'app-print-session',
  templateUrl: './print-session.component.html',
  styleUrls: ['./print-session.component.css']
})
export class PrintSessionComponent implements OnInit {

  @Input() model: Client;

  constructor() { }

  ngOnInit(): void {
  }

  setModel(newModel: Client) {
    this.model = newModel;
  }
}
