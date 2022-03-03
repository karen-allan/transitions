import { Component, OnInit } from '@angular/core';
import { Client } from '../../ts-files/client';
import { FormsOverviewComponent } from '../forms-overview/forms-overview.component';

@Component({
  selector: 'app-intake-caregiver-support',
  templateUrl: './intake-caregiver-support.component.html',
  styleUrls: ['./intake-caregiver-support.component.css']
})
export class IntakeCaregiverSupportComponent implements OnInit {

  model: Client;

  showCaregiverForm: boolean = true;

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
