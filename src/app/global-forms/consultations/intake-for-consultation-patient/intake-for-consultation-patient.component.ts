import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-intake-for-consultation-patient',
  templateUrl: './intake-for-consultation-patient.component.html',
  styleUrls: ['./intake-for-consultation-patient.component.css']
})
export class IntakeForConsultationPatientComponent implements OnInit {

  @Input() model: Client;

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
