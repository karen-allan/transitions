import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../ts-files/client";
import { FormsOverviewComponent } from '../../forms-overview/forms-overview.component';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css']
})
export class DemographicsComponent implements OnInit {

    model: Client;

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
