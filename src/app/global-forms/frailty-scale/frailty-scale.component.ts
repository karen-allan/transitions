import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-frailty-scale',
  templateUrl: './frailty-scale.component.html',
  styleUrls: ['./frailty-scale.component.css']
})
export class FrailtyScaleComponent implements OnInit {

  @Input() @Output() client:Client;

  constructor() { }

  ngOnInit(): void {
    this.client.eolFrailty = 'frailtyChart-1';

  }

}
