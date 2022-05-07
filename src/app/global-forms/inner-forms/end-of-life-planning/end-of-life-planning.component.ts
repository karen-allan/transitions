import {Component, Input, Output, OnInit} from '@angular/core';
import { Client} from "../../../ts-files/client";


@Component({
  selector: 'app-end-of-life-planning',
  templateUrl: './end-of-life-planning.component.html',
  styleUrls: ['./end-of-life-planning.component.css']
})
export class EndOfLifePlanningComponent implements OnInit {

  @Input() @Output() model:Client;

  constructor() { }

  ngOnInit(): void {

    this.model.frailty = 'frailtyChart-1';
    this.model.will=false;
    this.model.finances=false;
    this.model.wishes=false;



//alert("do you have a will is " + this.model.will)
  }

}
