import {Component, Input, OnInit} from '@angular/core';
import { Client } from '../../ts-files/client';
import { FormsOverviewComponent } from '../forms-overview/forms-overview.component';

@Component({
  selector: 'app-intake-client-session',
  templateUrl: './intake-client-session.component.html',
  styleUrls: ['./intake-client-session.component.css']
})
export class IntakeClientSessionComponent implements OnInit {

  model: Client;

  showSessionForm: boolean = true;

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
