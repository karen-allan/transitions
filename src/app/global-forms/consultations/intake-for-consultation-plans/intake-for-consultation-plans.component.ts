import {Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-intake-for-consultation-plans',
  templateUrl: './intake-for-consultation-plans.component.html',
  styleUrls: ['./intake-for-consultation-plans.component.css']
})
export class IntakeForConsultationPlansComponent implements OnInit {

  @ViewChild("errMsg") errMsg: ElementRef;
  errorMessage;
  page: number = -1;
  now:string;
  submitted = false;

  provinces = ['British Columbia', 'Alberta', 'Saskatchewan', 'Manitoba', 'Ontario', 'Quebec', 'Prince Edward Island', 'New Brunswick', 'Nova Scotia', 'Newfoundland',
    'Northwest Territories', 'Nunavut', 'Yukon'];


  model  = new Client(0, '', '','' ,'' ,'', this.provinces[0], '', 'Canada','' ,
      '', '','' ,'', '', false, false, false,
      false ,false ,false ,false ,false, false,'',
      '',false,false, false, false, false, false,'',
      '', '', '', '', '', '', '');

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getCurrentDate();

  }

  onSubmit() {
    this.submitted = true;
  }

  /* *************************************************************************************************************** */
  checkClientInfo(): void {
    if (this.model.name.length == 0) {
      this.errorMessage="You must enter your name here.";
      let  element = this.renderer.selectRootElement('#error');
      element.focus();
      return;
    }

    if (this.model.cellPhone.length == 0) {
      this.errorMessage="You must enter your phone number here.";
      let  element = this.renderer.selectRootElement('#error');
      element.focus();
      return;
    }

    if (this.model.email.length == 0) {
      this.errorMessage="You must enter your email address here.";
      let  element = this.renderer.selectRootElement('#error');
      element.focus();
      return;
    }

    if (this.model.address.length == 0) {
      this.errorMessage="You must enter your address here.";
      let  element = this.renderer.selectRootElement('#error');
      element.focus();
      return;
    }

    if (this.model.city.length == 0) {
      this.errorMessage="You must enter your city, town or region here.";
      let  element = this.renderer.selectRootElement('#error');
      element.focus();
      return;
    }

    if (this.model.pc.length == 0) {
      this.errorMessage="You must enter your postal code here.";
      let  element = this.renderer.selectRootElement('#error');
      element.focus();
      return;
    }

    if (this.model.country.length == 0) {
      this.errorMessage="You must enter your country here.";
      let  element = this.renderer.selectRootElement('#error');
      element.focus();
      return;
    }

    if (this.model.emergName.length == 0) {
      this.errorMessage="You must enter your emergency contact here.";
      let  element = this.renderer.selectRootElement('#error');
      element.focus();
      return;
    }

    if (this.model.emergPhone.length == 0) {
      this.errorMessage="You must enter your emergency contact's phone number here.";
      let  element = this.renderer.selectRootElement('#error');
      element.focus();
      return;
    }

    if (this.model.emergRelation.length == 0) {
      this.errorMessage="You must enter your emergency contact's relationship to you here.";
      let  element = this.renderer.selectRootElement('#error');
      element.focus();
      return;
    }

    this.printProfile();
  }

  cancelClientInfo() {
    this.model.name = '';
    this.model.cellPhone='';
    this.model.email='';
    this.model.address ='';
    this.model.city ='';
    this.model.provState ='';
    this.model.pc ='';
    this.model.country ='';
    this.model.emergName='';
    this.model.emergRelation='';
    this.model.emergPhone='';
    this.model.knowledgeLevel='';
    this.clearMessage()
  }

  printProfile() {
    alert("printing intake form for " + this.model.name + " at " + this.model.address + ", " + this.model.city
        + " - " + this.model.provState + "," + this.model.country + " phone " + this.model.cellPhone + " " + this.model.email +
        " " + this.model.pc + ". " + "contact person is " + this.model.emergName + " " + this.model.emergPhone + " " + this.model.emergRelation);

  }

  getCurrentDate() {
    var today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.now = yyyy +'/' + mm +'/' + dd;
    this.model.defaultDate = this.now;
  }

  formatPhone() {
    var phone =' 1-NPA-NXX-XXXX, ';
    this.model.cellPhone = phone;
  }

  clearMessage() {
    this.errorMessage='';
  }


}
