import { Component, OnInit } from '@angular/core';
import { FormsOverviewComponent } from '../forms-overview/forms-overview.component';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-consult-profile',
  templateUrl: './consult-profile.component.html',
  styleUrls: ['./consult-profile.component.css']
})

export class ConsultProfileComponent implements OnInit {

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

  printProfile() {
    this._parent.copyModelToPrintComponent(this.model);
  }
}
