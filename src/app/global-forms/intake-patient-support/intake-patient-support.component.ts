import { Component, OnInit } from '@angular/core';
import { FormsOverviewComponent } from '../forms-overview/forms-overview.component';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-intake-patient-support',
  templateUrl: './intake-patient-support.component.html',
  styleUrls: ['./intake-patient-support.component.css']
})
export class IntakePatientSupportComponent implements OnInit {

  model: Client;

  showPatientForm: boolean = true;

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
