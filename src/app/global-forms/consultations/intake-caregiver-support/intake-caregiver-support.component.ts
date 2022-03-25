import { Component, OnInit } from '@angular/core';
import { Client } from '../../../ts-files/client';
import{ConsultationFormContainerComponent} from "../consultation-form-container/consultation-form-container.component";

@Component({
  selector: 'app-intake-caregiver-support',
  templateUrl: './intake-caregiver-support.component.html',
  styleUrls: ['./intake-caregiver-support.component.css']
})
export class IntakeCaregiverSupportComponent implements OnInit {

  model: Client;

  showCaregiverForm: boolean = true;

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
