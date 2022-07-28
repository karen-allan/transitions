import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-session-considerations',
  templateUrl: './session-considerations.component.html',
  styleUrls: ['./session-considerations.component.css']
})
export class SessionConsiderationsComponent implements OnInit {

  @Input() @Output() model:Client;

  constructor() { }

  ngOnInit(): void {
  }

}
