import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-data-entry-caregiver-consult',
  templateUrl: './data-entry-caregiver-consult.component.html',
  styleUrls: ['./data-entry-caregiver-consult.component.css']
})

export class DataEntryCaregiverConsultComponent implements OnInit {

  @Input() @Output() model: Client;

  page: number = -1;
  now:string;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.getCurrentDate();
  }

  onSubmit() {
    this.submitted = true;
  }

  /* *************************************************************************************************************** */

  getCurrentDate() {
    var today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.now = yyyy +'/' + mm +'/' + dd;
    this.model.defaultDate = this.now;
  }

}
