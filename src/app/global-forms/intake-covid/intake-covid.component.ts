import { Component, OnInit } from '@angular/core';
import {Client} from "../../ts-files/client";
import {FormsOverviewComponent} from "../forms-overview/forms-overview.component";

@Component({
  selector: 'app-intake-covid',
  templateUrl: './intake-covid.component.html',
  styleUrls: ['./intake-covid.component.css']
})
export class IntakeCovidComponent implements OnInit {

  model: Client;

  showAssessmentForm: boolean = true;

  submitted = false;

  constructor(private _parent: FormsOverviewComponent) { }

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
