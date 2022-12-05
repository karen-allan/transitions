import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-data-entry-planning-consult',
  templateUrl: './data-entry-planning-consult.component.html',
  styleUrls: ['./data-entry-planning-consult.component.css']
})
export class DataEntryPlanningConsultComponent implements OnInit {

  @Input() @Output() client: Client;

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
  printProfile() {
  }

  getCurrentDate() {
    var today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.now = yyyy +'/' + mm +'/' + dd;
    this.client.defaultDate = this.now;
  }

}
