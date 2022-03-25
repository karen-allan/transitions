import { Component, OnInit } from '@angular/core';
import {Client} from "../../../ts-files/client";
import{ConsultationFormContainerComponent} from "../consultation-form-container/consultation-form-container.component";

@Component({
  selector: 'app-intake-make-plan',
  templateUrl: './intake-make-plan.component.html',
  styleUrls: ['./intake-make-plan.component.css']
})
export class IntakeMakePlanComponent implements OnInit {

  model: Client;

  showPlannerForm: boolean = true;

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
