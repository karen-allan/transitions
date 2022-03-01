import { Component, OnInit } from '@angular/core';
import {Client} from "../../ts-files/client";
import {FormsOverviewComponent} from "../forms-overview/forms-overview.component";

@Component({
  selector: 'app-covid-profile',
  templateUrl: './covid-profile.component.html',
  styleUrls: ['./covid-profile.component.css']
})
export class CovidProfileComponent implements OnInit {

  model  = new Client(0, '', '','' ,'' ,'' ,'' , '', '','' ,
      '', '','' ,'', '', false, false, false,
      false ,false ,false ,false ,false, false,'',
      '',false,false, false, '', '', '','',
      '', '');

  submitted = false;

  constructor(private _parent: FormsOverviewComponent) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }

 /* printProfile() {
    this._parent.copyModelToPrintComponent(this.model);
  }*/

}
