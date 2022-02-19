import { Component, OnInit } from '@angular/core';
import { BookOverviewComponent } from "../../../book-overview/book-overview.component";
import { Client } from '../../../../ts-files/client';

@Component({
  selector: 'app-session-profile',
  templateUrl: './session-profile.component.html',
  styleUrls: ['./session-profile.component.css']
})
export class SessionProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
