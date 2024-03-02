import {Component, EventEmitter, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {formatDate} from "@angular/common";
import {RepNine} from "../../../ts-files/rep-nine";
import * as moment from 'moment';

@Component({
  selector: 'app-choose-your-rep-wizard',
  templateUrl: './choose-your-rep-wizard.component.html',
  styleUrls: ['./choose-your-rep-wizard.component.css']
})
export class ChooseYourRepWizardComponent implements OnInit {

  errorMessage:string;
  rep:RepNine;
  title:string = "Title";

  page:number=0;
  finalPage:number=9;
  now:string;

  signingDate:string;

  // legalDate =  formatDate(this.today, 'y/MM/d',  'en-US')
  public event: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<ChooseYourRepWizardComponent>) { }

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.page = 0;

    this.setCurrentDateForHeader();
    /* will remove the defaults once done testing */
    this.setPublishDateDefault();
    this.setSigningDateDefault();
    this.setClientDefaults();

   this.setRepOneDefaults();
   this.setRepTwoDefaults();

   this.setWitnessOneDefaults();
   this.setWitnessTwoDefaults();

   this.setInstructionsDefault();

  }

  /* *************************************************************************************************************** */
  setCurrentDateForHeader() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

  /* *************************************************************************************************************** */
  setPublishDateDefault() {
    const today = new Date();
    this.rep.publish_date= formatDate(today, 'y/MM/d',  'en-US')
  }

  /* *************************************************************************************************************** */
  setSigningDateDefault() {
    const today = new Date();
    this.rep.signing_date =  formatDate(today, 'y/MM/d',  'en-US')
  }

  /* *************************************************************************************************************** */
  setClientDefaults() {
      this.rep.client_name="Karen Gail Allan"
      this.rep.client_address = "2608 Airstrip Road, Anglemont, B.C."
  }

  /* *************************************************************************************************************** */
  setRepOneDefaults() {
    this.rep.rep_primary_name='Michael Roy Allan';
    this.rep.rep_primary_address='2608 Airstrip Road, Anglemont, B.C.'
    /* this.rep.rep_primary_name='';
     this.rep.rep_primary_address=''*/
  }

  /* *************************************************************************************************************** */
  setRepTwoDefaults() {
    this.rep.rep_alternate_name='Nathan Emory Allan';
    this.rep.rep_alternate_address='203-3163 Riverwalk Avenue, Vancouver, B.C. V5S-0A8'
  }

  /* *************************************************************************************************************** */
  setWitnessOneDefaults() {
    this.rep.witness_one_name='Janice Lee McKai';
    this.rep.witness_one_address='315-416, Sutton Crescent, Kelowna, B.C., V1V-2J8'
  }

  /* *************************************************************************************************************** */
  setWitnessTwoDefaults() {
    this.rep.witness_two_name='April Jones';
    this.rep.witness_two_address='#27 - 870 West 7th Avenue, Vancouver, B.C., V5Z-4C1'
  }

  /* *************************************************************************************************************** */
  setInstructionsDefault() {
    this.rep.instructions_for_reps = "Please find all of my documents in our hard shell safe found in the office. There you will find" +
        " the wills, the advanced care plan, my wish list for care, my cpr form, edith form, insurance forms, the wealth management" +
        " information and the bank account information.";
  }

  /* *************************************************************************************************************** */
  /* Function is called from the html page. Publish date is not required. Not sure what this date is even for... */
  checkClientNameAndValidDate(): void {
    if (this.rep.client_name.length == 0 || this.rep.client_name == "") {
      this.errorMessage = "You must enter your name here.";
      return;
    }
    if (this.rep.publish_date.length == 0) {
      this.errorMessage = "You must enter the date here.";
      return;
    }
    if (this.rep.publish_date.length != 0) {
      if (!moment(this.rep.publish_date, "YYYY/MM/DD").isValid()) {
        this.errorMessage = "You must enter a valid date in format yyyy/mm/dd.";
        return;
      }
    }

    this.errorMessage='';
    this.getNextPage();
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
  /* called from the html */
  checkForValidDate(): void {
    if (this.rep.signing_date.length != 0) {
      if (!moment(this.rep.signing_date, "YYYY/MM/DD").isValid()) {
        this.errorMessage = "You must enter a valid date in format yyyy/mm/dd.";
        return;
      }
    }

    this.errorMessage='';
    this.getNextPage();
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
  cancelDataWizard() {
    this.page = 0;
    this.errorMessage='';

    this.rep.client_name = "";
    this.rep.client_address = "";
    this.rep.publish_date="";
    this.rep.rep_primary_name='';
    this.rep.rep_primary_address='';
    this.rep.rep_alternate_name='';
    this.rep.rep_alternate_address='';
    this.rep.witness_one_name='';
    this.rep.witness_one_address=''
    this.rep.witness_two_name='';
    this.rep.witness_two_address=''
    this.rep.instructions_for_reps = "";

    this.closeModal();
  }

  /* *************************************************************************************************************** */
  /* Set in choose-rep-overview.ts */
  setRep(rep:RepNine) {
    this.rep = rep;
  }

  /* *************************************************************************************************************** */
  /* Set in choose-rep-overview.ts */
  printFunction(){
    this.event.emit({rep: this.rep, print: true});
  }

  /* *************************************************************************************************************** */
  /* Set in choose-rep-overview.ts */
  closeModal(): void {
    this.event.emit({rep: this.rep, print: false});
  }

}
