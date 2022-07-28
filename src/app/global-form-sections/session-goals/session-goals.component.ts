import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-session-goals',
  templateUrl: './session-goals.component.html',
  styleUrls: ['./session-goals.component.css']
})
export class SessionGoalsComponent implements OnInit {

  @Input() @Output() model:Client;

  constructor() { }

    ngOnInit(): void {
      this.model.sessionEnergyKnowledge = 'knowledgeLevel1';
    }

  }
