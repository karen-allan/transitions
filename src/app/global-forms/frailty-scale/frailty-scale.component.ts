import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-frailty-scale',
  templateUrl: './frailty-scale.component.html',
  styleUrls: ['./frailty-scale.component.css']
})
export class FrailtyScaleComponent implements OnInit {

  @Input() @Output() model:Client;

  constructor() { }

  ngOnInit(): void {
    this.model.eolFrailty = 'frailtyChart-1';
  }

}
