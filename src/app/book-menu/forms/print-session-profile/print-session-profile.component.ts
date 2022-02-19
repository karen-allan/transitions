import { Component, OnInit } from '@angular/core';
import { Client } from '../../../ts-files/client';

@Component({
  selector: 'app-print-session-profile',
  templateUrl: './print-session-profile.component.html',
  styleUrls: ['./print-session-profile.component.css']
})
export class PrintSessionProfileComponent implements OnInit {

  model: Client;

  constructor() { }

  ngOnInit(): void {
  }

  setModel(newModel: Client) {
    this.model = newModel;
  }
}
