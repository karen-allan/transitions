import { Component, OnInit } from '@angular/core';
import { FormsOverviewComponent } from '../forms-overview/forms-overview.component';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-intake-make-plan',
  templateUrl: './intake-make-plan.component.html',
  styleUrls: ['./intake-make-plan.component.css']
})
export class IntakeMakePlanComponent implements OnInit {

  model: Client;

  showPlannerForm: boolean = true;

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
