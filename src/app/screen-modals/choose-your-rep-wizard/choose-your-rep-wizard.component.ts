import {Component, EventEmitter, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {formatDate} from "@angular/common";
import {RepNine} from "../../ts-files/rep-nine";
import * as moment from 'moment';
import {DataService} from "../../service-files/data.service";


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
  finalPage:number=12;
  now:string;

  //provinces:Province[];
  updatedValue:string="";
  dateError = false;

  public event: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<ChooseYourRepWizardComponent>, private dataService: DataService) { }

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.page = 0;

    this.initializeData();
    this.setCurrentDateForHeader();

  }

  /* *************************************************************************************************************** */
  setCurrentDateForHeader() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

  /* *************************************************************************************************************** */
  /* Function is called from the html page.  r... */
  /* *************************************************************************************************************** */
  checkClientName(): void {

    /* These are the only required fields */
    if (this.rep.client_name.length == 0 && this.rep.client_name == '') {
      this.errorMessage = "You must enter your full name here.";
      return;
    }
    else {
      this.dataService.splitNames(this.rep.client_name)
          .subscribe(newName => this.updatedValue = newName);

      this.rep.client_name = this.updatedValue;
    }

    this.errorMessage = this.checkClientAddress();
    if (this.errorMessage.length > 0 && this.errorMessage != '') {
        return;
    }

    this.errorMessage = this.checkForValidDate();
    if (this.errorMessage.length > 0 && this.errorMessage != '') {
      return;
    }

    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  checkClientAddress(): string {
    if (this.rep.client_address.length == 0 && this.rep.client_address == '') {
      this.errorMessage = "You must enter your full address here.";
      return this.errorMessage;
    }
    if (this.rep.client_city.length == 0 && this.rep.client_city == '') {
      this.errorMessage = "You must enter your city or town here.";
      return this.errorMessage;
    }
    if (this.rep.client_postal.length == 0 && this.rep.client_postal == '') {
      this.errorMessage = "You must enter your postal code here.";
      return this.errorMessage;
    }
    else {
      this.errorMessage = '';
      return this.errorMessage;
    }
  }

  /* *************************************************************************************************************** */
  /* called from the html */
  checkForValidDate(): string {

    //19621123
    if (this.rep.client_dob.length > 0 && this.rep.client_dob != '') {
      this.dataService.checkIfYearStartDateIsValid(this.rep.client_dob)
          .subscribe(newVar => this.dateError = newVar);

      if(this.dateError) {
        this.errorMessage = "This is not a valid date."
      }
      else {
        this.errorMessage ="";
      }

    }
    return (this.errorMessage);
  }

  /* *************************************************************************************************************** */
  formatRep1Name(): void {

    //Rep 1 name is not required but if it exists capitalize it
    if (this.rep.rep_primary_name.length == 0 && this.rep.rep_primary_name == '') {
      return;
    }
    else {
      this.dataService.splitNames(this.rep.rep_primary_name)
          .subscribe(newName => this.updatedValue = newName);
    }

    this.rep.rep_primary_name = this.updatedValue;

    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  formatRep2Name(): void {

    if (this.rep.rep_alternate_name.length == 0 && this.rep.rep_alternate_name == '') {
      return;
    }
    else {
      this.dataService.splitNames(this.rep.rep_alternate_name)
          .subscribe(newName => this.updatedValue = newName);
    }

    this.rep.rep_alternate_name = this.updatedValue;

    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  formatWitness1Name(): void {

    //Witness name is not required but if it exists capitalize it
    if (this.rep.witness_one_name.length == 0 && this.rep.witness_one_name == '') {
      return;
    }
    else {
      this.dataService.splitNames(this.rep.witness_one_name)
          .subscribe(newName => this.updatedValue = newName);
    }

    this.rep.witness_one_name = this.updatedValue;

    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  formatWitness2Name(): void {

    if (this.rep.witness_two_name.length == 0 && this.rep.witness_two_name == '') {
      return;
    }
    else {
      this.dataService.splitNames(this.rep.witness_two_name)
          .subscribe(newName => this.updatedValue = newName);
    }

    this.rep.witness_two_name = this.updatedValue;

    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  /* called from the html on page 6 - if choosing alternate move ahead to page 7. If not choosing alt, skip to page 8 */

  moveAlternateChoiceGoingForward(): void {
    if (this.rep.choose_alternate == "chooseAlternateYes") {
     // alert ('on page 6 and I want an alternate so go to next page 7');
      this.getNextPage();
    }
    else if (this.rep.choose_alternate == "chooseAlternateNo") {
      this.rep.rep_alternate_name="";
      this.rep.rep_alternate_address="";
      //alert ('on page 6 and I DO NOT want an alternate so skip to page 8');
      this.skipNextPage();
    }

  //  alert ('next page will be page ' + this.page);

  }

  /* ***************************************************************************************************************
  if on page 8 and want to move back but no alternate move back 2 pages. If an alternate move back one page to 7  */
  moveAlternateChoiceGoingBackward(): void {

    if (this.rep.choose_alternate == "chooseAlternateYes") {
      //alert ('On page 8 and I chose an alternate so I move back to page 7');
      this.getPreviousPage();
    }
    else if (this.rep.choose_alternate == "chooseAlternateNo") {
     // alert ('on page 8 and I DO NOT want an alternate so skip to page 6');
      this.skipToPage(6);
    }

  }

  /* *************************************************************************************************************** */
  skipToPage(skipToPage:number) {
    this.page = skipToPage;
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
  skipNextPage() {
    this.page = this.page + 2;
  }

  /* *************************************************************************************************************** */
  cancelDataWizard() {
    this.page = 0;
    this.errorMessage='';

    this.rep.client_name = "";
    this.rep.client_address = "";
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
  formatDataForPrint(): void {

    this.formatBirthdateToPrint();
    this.printFunction();
  }

  /* *************************************************************************************************************** */
  formatBirthdateToPrint(): void {

    // This is a string like '19621123'
    if (this.rep.client_dob === '' && this.rep.client_dob.length == 0) {
      return;
    }

    this.dataService.formatYearStartBirthdateToPrint(this.rep.client_dob)
        .subscribe(newName => this.updatedValue = newName);

    this.rep.client_dob = this.updatedValue;

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

  /* *************************************************************************************************************** */
  initializeData() {

    //this.rep.client_name = ""
    this.rep.client_name="jimmy george mason"
    //this.rep.client_address = ""
    this.rep.client_address = "2633 - Smithson Avenue"
    //this.rep.client_city = "";
    this.rep.client_city = "Cloverdale";
    //this.rep.client_postal = "";
    this.rep.client_postal = "V1E-3M4";
    this.rep.global_province= 'B.C.',
    this.rep.client_dob = "",

    this.rep.rep_primary_name='mickey j mouse';
    this.rep.rep_primary_address='Number 5 Orange, Vancouver, B.C. V1E 0K3'

    this.rep.rep_alternate_name='nathan emory allan';
    this.rep.rep_alternate_address='203-3163 Riverwalk Avenue, Vancouver, B.C. V5S-0A8'

    //this.rep.witness_one_name = '';
    this.rep.witness_one_name='veronica rose lake';
    //this.rep.witness_one_address = ''
    this.rep.witness_one_address='315-416, Sutton Crescent, Princeton, B.C., V1V-2J8'

    //this.rep.witness_two_name = '';
    this.rep.witness_two_name='april jones';
    // this.rep.witness_two_address = '';
    this.rep.witness_two_address='#27 - 870 West 7th Avenue, Vancouver, B.C., V5Z-4C1'

    //this.rep.instructions_for_reps = '',
    this.rep.instructions_for_reps = "Please find all of my documents in our hard shell safe found in the office. There you will find" +
        " the wills, the advanced care plan, my wish list for care, my cpr form, edith form, insurance forms, the wealth management" +
        " information and the bank account information.";

    this.rep.witness_lawyer = false;
    this.rep.witness_notary = false;

    this.rep.choose_alternate = 'chooseAlternateYes';


  }

}
