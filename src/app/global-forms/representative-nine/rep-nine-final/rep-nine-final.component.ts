import { Component, OnInit } from '@angular/core';
import { RepNine} from "../../../ts-files/rep-nine";
import {RepNineWizardOverviewComponent} from "../../../menu-wizard/rep-nine/rep-nine-wizard-overview/rep-nine-wizard-overview.component";


@Component({
  selector: 'app-rep-nine-final',
  templateUrl: './rep-nine-final.component.html',
  styleUrls: ['./rep-nine-final.component.css']
})
export class RepNineFinalComponent implements OnInit {

  model: RepNine;
  submitted = false;


  constructor(private _parent: RepNineWizardOverviewComponent) { }

  ngOnInit(): void {
    alert("I am in rep-nine-final")
  }

  onSubmit() {
    this.submitted = true;
  }

  setModel(newModel: RepNine) {
    this.model = newModel;

  }


}
