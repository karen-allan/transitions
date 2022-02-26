import { Component, OnInit } from '@angular/core';
import { Client } from '../../ts-files/client';
import { FormsOverviewComponent } from '../forms-overview/forms-overview.component';

@Component({
  selector: 'app-session-profile',
  templateUrl: './session-profile.component.html',
  styleUrls: ['./session-profile.component.css']
})
export class SessionProfileComponent implements OnInit {

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
