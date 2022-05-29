import { Component, OnInit } from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})

export class CovidComponent implements OnInit {

  model: Client;

  showAssessmentForm: boolean = true;

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }

  setModel(newModel: Client) {
    this.model = newModel;
  }

  printProfile() {
    //this._parent.copyModelToPrintComponent(this.model);
  }

}
