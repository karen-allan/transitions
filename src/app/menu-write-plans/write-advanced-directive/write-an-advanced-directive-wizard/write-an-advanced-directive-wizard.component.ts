import {Component, EventEmitter, OnInit} from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";
import {MatDialogRef} from "@angular/material/dialog";
import * as moment from "moment/moment";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-write-an-advanced-directive-wizard',
  templateUrl: './write-an-advanced-directive-wizard.component.html',
  styleUrl: './write-an-advanced-directive-wizard.component.css'
})
export class WriteAnAdvancedDirectiveWizardComponent  implements OnInit {

  errorMessage:string;
  rep:RepNine;
  title:string = "Title";
  page:number=0;
  finalPage:number=5;
  now:string;
  legalDate:string;

  legal:Date;

  public event: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<WriteAnAdvancedDirectiveWizardComponent>) { }

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.page = 0;
    this.getCurrentDate();
  }

  printFunction(){
    this.event.emit({rep: this.rep, print: true});
  }

  closeModal(): void {
    this.event.emit({rep: this.rep, print: false});
  }

  /* *************************************************************************************************************** */
  checkClientName(): void {
    if (this.rep.client_name.length == 0) {
      this.errorMessage = "You must enter your name here.";
      return;
    }
    else if (this.rep.client_name == '') {
      this.errorMessage = "You must enter your name here.";
      return;
    }
    else {
      this.errorMessage='';
      // alert('name is okay ' + this.wishes.client_name)
      this.getNextPage();
    }

    if (moment(this.rep.signing_date, "YYYY/MM/DD").isValid()) {
      // alert('name is okay ' + this.rep.signing_date)
    }
    else {
      this.errorMessage = "You must enter a valid date in format yyyy/mm/dd.";
    }
  }

  /* *************************************************************************************************************** */
  setRep(rep:RepNine) {
    this.rep = rep;
  }

  /* *************************************************************************************************************** */
  getNextPage() {
    //console.log("this.page = " + this.page + " - getting next page");
    /* if (this.page > 0) {
       // Questions start on page 1, not page 0
       this.wishes.questions[this.page-1].selectedAnswer = this.selectedQuestion.selectedAnswer;
     }*/
    this.page = this.page + 1;
    // this.getQuestion(this.page);
  }

  /* *************************************************************************************************************** */
  getPreviousPage() {
    // this.wishes.questions[this.page-1].selectedAnswer = this.selectedQuestion.selectedAnswer;
    this.page = this.page - 1;
    // this.getQuestion(this.page);
  }

  /* *************************************************************************************************************** */
  finished() {
    this.page = this.page + 1;
  }

  /* *************************************************************************************************************** */
  setDate() {
    this.getCurrentDate();
  }

  /* *************************************************************************************************************** */
  setDefaultName(name:string) {
    // this.rep.client_name = "";
     this.rep.client_name = name;
  }

  /* *************************************************************************************************************** */
  setDefaultAddress(address:string) {
    this.rep.client_address = address;
  }

  /* *************************************************************************************************************** */
  setLegalDate(signingDate:string) {
    this.rep.signing_date = signingDate;
  }

  /* *************************************************************************************************************** */
  cancelWizard() {
    //   alert("am cancelling for client " + this.wishes.client_name);
    this.page = 0;
    this.errorMessage='';
    this.rep.client_name='';
    this.closeModal();
  }

  /* *************************************************************************************************************** */
  getCurrentDate() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

  /*/!* *************************************************************************************************************** *!/
  getLegalDate() {
    const legal = new Date();
    this.legalDate= formatDate(legal, 'shortDate',  'en-US')

  }*/
}
