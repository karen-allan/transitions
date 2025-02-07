import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-support-for-caregiver',
  templateUrl: './support-for-caregiver.component.html',
  styleUrls: ['./support-for-caregiver.component.css']
})
export class SupportForCaregiverComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
