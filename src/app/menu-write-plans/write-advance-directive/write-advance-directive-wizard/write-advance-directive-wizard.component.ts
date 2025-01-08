import {Component, EventEmitter} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import * as moment from "moment/moment";
import {formatDate} from "@angular/common";
import {AdvanceDirective} from "../../../ts-files/advance_directive";

@Component({
  selector: 'app-write-advance-directive-wizard',
  templateUrl: './write-advance-directive-wizard.component.html',
  styleUrl: './write-advance-directive-wizard.component.css'
})
export class WriteAdvanceDirectiveWizardComponent {

  errorMessage:string;
  directive:AdvanceDirective;
  title:string = "Title";

  page:number=0;
  finalPage:number=4;
  now:string;

  signingDate:string;

  public event: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<WriteAdvanceDirectiveWizardComponent>) { }

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.page = 0;
    this.directive.organ_donor='organDonorNo';

    this.setCurrentDateForHeader();
    /* will remove after testing */
    this.setPublishDateDefault();
    this.setSigningDateDefault();
    this.setClientDefaults();

    this.setRepOneDefaults();
    this.setRepTwoDefaults();

    this.setWitnessOneDefaults();
    this.setWitnessTwoDefaults();

    this.setDateBirthDefault();
    this.setPersonalCareNumDefault();
    this.setConsentGivenNotesDefault();
    this.setConsentRefusedNotesDefault();

  }

  /* *************************************************************************************************************** */
  setCurrentDateForHeader() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

  /* *************************************************************************************************************** */
  setPublishDateDefault() {
    const today = new Date();
    this.directive.publish_date= formatDate(today, 'y/MM/dd',  'en-US')
  }

  /* *************************************************************************************************************** */
  setSigningDateDefault() {
    const today = new Date();
    this.directive.signing_date =  formatDate(today, 'y/MM/dd',  'en-US')
  }

  /* *************************************************************************************************************** */
  setClientDefaults() {
    this.directive.client_name="Karen Gail Allan"
    this.directive.client_address = "2608 Airstrip Road, Anglemont, B.C."
  }

  /* *************************************************************************************************************** */
  setRepOneDefaults() {
    this.directive.rep_primary_name='Michael Roy Allan';
    this.directive.rep_primary_address='2608 Airstrip Road, Anglemont, B.C.'
    /* this.rep.rep_primary_name='';
     this.rep.rep_primary_address=''*/
  }

  /* *************************************************************************************************************** */
  setRepTwoDefaults() {
    this.directive.rep_alternate_name='Nathan Emory Allan';
    this.directive.rep_alternate_address='203-3163 Riverwalk Avenue, Vancouver, B.C. V5S-0A8'
  }

  /* *************************************************************************************************************** */
  setWitnessOneDefaults() {
    this.directive.witness_one_name='Janice Lee McKai';
    this.directive.witness_one_address='315-416, Sutton Crescent, Kelowna, B.C., V1V-2J8'
  }

  /* *************************************************************************************************************** */
  setWitnessTwoDefaults() {
    this.directive.witness_two_name='April Jones';
    this.directive.witness_two_address='#27 - 870 West 7th Avenue, Vancouver, B.C., V5Z-4C1'
  }

  /* *************************************************************************************************************** */
  setDateBirthDefault() {
    const birthday = new Date('july 17 1955');
    this.directive.client_dob =  formatDate(birthday, 'y/MM/dd',  'en-US')
  }

  /* *************************************************************************************************************** */
  setPersonalCareNumDefault():void {
     this.directive.client_phc_number = '9012543';
  }

  /* *************************************************************************************************************** */
  setConsentGivenNotesDefault() {

    this.directive.consent_given_notes='I give consent for blood transfusions, pain medication and oxygen treatments.'
  }

  /* *************************************************************************************************************** */
  setConsentRefusedNotesDefault() {

    this.directive.consent_refused_notes='I refuse treatments such as cutting off of my limbs.'

  }

  /* *************************************************************************************************************** */
  /* Function is called from the html page. Publish date is not required. Not sure what this date is even for... */
  checkClientNameAndValidDate(): void {
    if (this.directive.client_name.length == 0 || this.directive.client_name == "") {
      this.errorMessage = "You must enter your name here.";
      return;
    }
    if (this.directive.publish_date.length == 0) {
      this.errorMessage = "You must enter the date here.";
      return;
    }
    if (this.directive.publish_date.length != 0) {
      if (!moment(this.directive.publish_date, "YYYY/MM/DD").isValid()) {
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
    if (this.directive.rep_primary_name.length == 0 || this.directive.rep_primary_name=="") {
      this.errorMessage = "You must enter the full name of your Representative here.";
      return;
    }
    if (this.directive.rep_primary_address.length == 0 || this.directive.rep_primary_address=="") {
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
    if (this.directive.rep_alternate_name.length == 0 || this.directive.rep_alternate_name=="") {
      this.errorMessage = "You must enter the full name of your Alternate Representative here.";
      return;
    }
    if (this.directive.rep_alternate_address.length == 0 || this.directive.rep_alternate_address=="") {
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
    if (this.directive.signing_date.length != 0) {
      if (!moment(this.directive.signing_date, "YYYY/MM/DD").isValid()) {
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
  cancelData() {
    this.page = 0;
    this.errorMessage='';

    this.directive.client_name = "";
    this.directive.client_address = "";
    this.directive.publish_date="";
    this.directive.rep_primary_name='';
    this.directive.rep_primary_address='';
    this.directive.rep_alternate_name='';
    this.directive.rep_alternate_address='';
    this.directive.witness_one_name='';
    this.directive.witness_one_address=''
    this.directive.witness_two_name='';
    this.directive.witness_two_address=''
    this.directive.client_dob="",
    this.directive.client_phc_number='',
    this.directive.consent_given_notes='',
    this.directive.consent_refused_notes='';

    this.closeModal();
  }

  /* *************************************************************************************************************** */
  /* Set in choose-rep-overview.ts */
  setDirective(directive:AdvanceDirective) {
    this.directive = directive;
  }

  /* *************************************************************************************************************** */
  /* Set in choose-rep-overview.ts */
  printFunction(){
    this.event.emit({rep: this.directive, print: true});
  }

  /* *************************************************************************************************************** */
  /* Set in choose-rep-overview.ts */
  closeModal(): void {
    this.event.emit({rep: this.directive, print: false});
  }

}
