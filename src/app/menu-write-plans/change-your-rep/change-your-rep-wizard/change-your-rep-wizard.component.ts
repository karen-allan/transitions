import {Component, EventEmitter} from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";
import {MatDialogRef} from "@angular/material/dialog";
import * as moment from 'moment';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-change-your-rep-wizard',
  templateUrl: './change-your-rep-wizard.component.html',
  styleUrl: './change-your-rep-wizard.component.css'
})
export class ChangeYourRepWizardComponent {

  errorMessage:string;
  rep:RepNine;
  title:string = "Title";
  page:number=0;
  finalPage:number=2;
  now:string;
  today = new Date();

  // legalDate =  formatDate(this.today, 'y/MM/d',  'en-US')
  public event: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<ChangeYourRepWizardComponent>) { }

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.page = 0;

    this.getCurrentDateForHeader();

    this.setClientDefaults();

    this.setRepOneDefaults();
    this.setRepTwoDefaults();

    this.setWitnessOneDefaults();
    this.setWitnessTwoDefaults();

  }

  /* *************************************************************************************************************** */
  setClientDefaults() {
    this.rep.client_name="Karen Gail Allan"
    this.rep.client_address = "2608 Airstrip Road, Anglemont, B.C."
  }


  /* *************************************************************************************************************** */
  /* called from the html */
  checkClientNameAndValidDate(): void {
    if (this.rep.client_name.length == 0 || this.rep.client_name=="") {
      this.errorMessage = "You must enter your name here.";
      return;
    }
    if (!moment(this.rep.signing_date, "YYYY/MM/DD").isValid()) {
      this.errorMessage = "You must enter a valid date in format yyyy/mm/dd.";
    }
    else {
      this.errorMessage='';
      this.getNextPage();
    }

  }

  /* *************************************************************************************************************** */
  /* called from the html */
  checkPrimaryRepNameAndAddress(): void {
    if (this.rep.rep_primary_name.length == 0 || this.rep.rep_primary_name=="") {
      this.errorMessage = "You must enter the full name of your Representative here.";
      return;
    }
    if (this.rep.rep_primary_address.length == 0 || this.rep.rep_primary_address=="") {
      this.errorMessage = "You must enter the full address of your Representative here.";
    }
    else {
      this.errorMessage='';
      this.getNextPage();
    }

  }

  /* *************************************************************************************************************** */
  /* called from the html */
  checkAlternateRepNameAndAddress(): void {
    if (this.rep.rep_alternate_name.length == 0 || this.rep.rep_alternate_name=="") {
      this.errorMessage = "You must enter the full name of your Alternate Representative here.";
      return;
    }
    if (this.rep.rep_alternate_address.length == 0 || this.rep.rep_alternate_address=="") {
      this.errorMessage = "You must enter the full address of your Alternate Representative here.";
    }
    else {
      this.errorMessage='';
      this.getNextPage();
    }

  }

  /* *************************************************************************************************************** */
  getNextPage() {
    this.page = this.page + 1;
  }

  /* *************************************************************************************************************** */
  getPreviousPage() {
    this.page = this.page - 1;
  }

  /* *************************************************************************************************************** */
  finished() {
    this.page = this.page + 1;
  }

  /* *************************************************************************************************************** */


  setRepOneDefaults() {
    this.rep.rep_primary_name='Michael Roy Allan';
    this.rep.rep_primary_address='2608 Airstrip Road, Anglemont, B.C.'
    /* this.rep.rep_primary_name='';
     this.rep.rep_primary_address=''*/
  }

  setRepTwoDefaults() {
    this.rep.rep_alternate_name='Nathan Emory Allan';
    this.rep.rep_alternate_address='203-3163 Riverwalk Avenue, Vancouver, B.C. V5S-0A8'
  }

  setWitnessOneDefaults() {
    this.rep.witness_one_name='Janice Lee McKai';
    this.rep.witness_one_address='315-416, Sutton Crescent, Kelowna, B.C., V1V-2J8'
  }

  setWitnessTwoDefaults() {
    this.rep.witness_two_name='April Jones';
    this.rep.witness_two_address='#27 - 870 West 7th Avenue, Vancouver, B.C., V5Z-4C1'
  }

  /* *************************************************************************************************************** */
  cancelWizard() {
    this.page = 0;
    this.errorMessage='';
    this.rep.client_name='';
    this.closeModal();
  }

  /* *************************************************************************************************************** */
  getCurrentDateForHeader() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

  /* *************************************************************************************************************** */
  setRep(rep:RepNine) {
    this.rep = rep;
  }

  /* *************************************************************************************************************** */
  printFunction(){
    this.event.emit({rep: this.rep, print: true});
  }

  /* *************************************************************************************************************** */
  closeModal(): void {
    this.event.emit({rep: this.rep, print: false});
  }

}
