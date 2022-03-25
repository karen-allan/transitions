import { Component, OnInit } from '@angular/core';
import {Client} from "../../../ts-files/client";
import{ConsultationFormContainerComponent} from "../consultation-form-container/consultation-form-container.component";

@Component({
  selector: 'app-intake-patient-support',
  templateUrl: './intake-patient-support.component.html',
  styleUrls: ['./intake-patient-support.component.css']
})
export class IntakePatientSupportComponent implements OnInit {

  model: Client;

  showPatientForm: boolean = true;

  submitted = false;

  constructor(private _parent: ConsultationFormContainerComponent) { }

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
