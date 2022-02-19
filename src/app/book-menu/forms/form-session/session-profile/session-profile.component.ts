import { Component, OnInit } from '@angular/core';
import { BookOverviewComponent } from "../../../book-overview/book-overview.component";
import { Client } from '../../../../ts-files/client';
import { FormSideMenuComponent } from '../../form-side-menu/form-side-menu.component';

@Component({
  selector: 'app-session-profile',
  templateUrl: './session-profile.component.html',
  styleUrls: ['./session-profile.component.css']
})
export class SessionProfileComponent implements OnInit {

  model  = new Client( 1, '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', false, false, false, false,
      false, false, false, false, false, false, false, false, '', '', '', '');

  submitted = false;

  constructor(private _parent: FormSideMenuComponent) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }

  printProfile() {
    this._parent.copyModelToPrintComponent(this.model);
  }
}
