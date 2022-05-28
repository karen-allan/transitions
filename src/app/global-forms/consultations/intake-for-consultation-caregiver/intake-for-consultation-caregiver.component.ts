import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-intake-for-consultation-caregiver',
  templateUrl: './intake-for-consultation-caregiver.component.html',
  styleUrls: ['./intake-for-consultation-caregiver.component.css']
})
export class IntakeForConsultationCaregiverComponent implements OnInit {

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
  printProfile() {
/*    alert("printing intake form for " + this.model.name + " at " + this.model.address + ", " + this.model.city
        + " - " + this.model.provState + "," + this.model.country + " phone " + this.model.cellPhone + " " + this.model.email +
        " " + this.model.pc + ". " + "contact person is " + this.model.emergName + " " + this.model.emergPhone + " " + this.model.emergRelation);*/

  }

  getCurrentDate() {
    var today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.now = yyyy +'/' + mm +'/' + dd;
    this.model.defaultDate = this.now;
  }

}
