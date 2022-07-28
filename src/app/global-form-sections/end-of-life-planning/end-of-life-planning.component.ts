import {Component, Input, Output, OnInit} from '@angular/core';
import {Client} from "../../ts-files/client";


@Component({
  selector: 'app-end-of-life-planning',
  templateUrl: './end-of-life-planning.component.html',
  styleUrls: ['./end-of-life-planning.component.css']
})
export class EndOfLifePlanningComponent implements OnInit {

  @Input() @Output() model:Client;

  constructor() {
  }

  ngOnInit(): void {
  }

}
