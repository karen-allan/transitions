import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {

  @Input()  client: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
