import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-intake-for-energy-session',
  templateUrl: './intake-for-energy-session.component.html',
  styleUrls: ['./intake-for-energy-session.component.css']
})

export class IntakeForEnergySessionComponent implements OnInit {

  @Input() model: Client;
  page: number = -1;
  now:string;
  submitted = false;

  constructor(private renderer: Renderer2) { }

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
