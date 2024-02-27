import {Component, EventEmitter, OnInit} from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {Question} from "../../../ts-files/question";
import {MatDialogRef} from "@angular/material/dialog";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-make-wishes-wizard',
  templateUrl: './make-wishes-wizard.component.html',
  styleUrl: './make-wishes-wizard.component.css'
})
export class MakeWishesWizardComponent implements OnInit {

  errorMessage:string;
  wishes:WishesWizard;
  title:string = "Title";
  page:number=0;
  finalPage:number=20;
  selectedQuestion:Question;
  now:string;
  public event: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<MakeWishesWizardComponent>) {
  }

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.page = 0;
    //  this.page = 16;
    this.getCurrentDate();
  }

  printFunction(){
    this.event.emit({wishes: this.wishes, print: true});
  }

  closeModal(): void {
    this.event.emit({wishes: this.wishes, print: false});
  }

  onAnswerChanged(value) {
    // this.selectedQuestion.responses[value].response_string;
    this.selectedQuestion.selectedAnswer = value;
  }

  /* *************************************************************************************************************** */
  checkClientName(): void {
    if (this.wishes.client_name.length == 0) {
      this.errorMessage = "You must enter your name here.";
      return;
    }
    else if (this.wishes.client_name == '') {
      this.errorMessage = "You must enter your name here.";
      return;
    }
    else {
      this.errorMessage='';
      // alert('name is okay ' + this.wishes.client_name)
      this.getNextPage();
    }
  }

  /* *************************************************************************************************************** */
  getNextPage() {
    //console.log("this.page = " + this.page + " - getting next page");
    if (this.page > 0) {
      // Questions start on page 1, not page 0
      this.wishes.questions[this.page-1].selectedAnswer = this.selectedQuestion.selectedAnswer;
    }
    this.page = this.page + 1;
    this.getQuestion(this.page);
  }

  /* *************************************************************************************************************** */
  getPreviousPage() {
    this.wishes.questions[this.page-1].selectedAnswer = this.selectedQuestion.selectedAnswer;
    this.page = this.page - 1;
    this.getQuestion(this.page);
  }

  /* *************************************************************************************************************** */
  finished() {
    this.page = this.page + 1;
  }

  /* *************************************************************************************************************** */
  getQuestion(pageNumber: number | undefined) {
    // Question 0 is on Page 1
    let questionNumber = pageNumber - 1;
    this.selectedQuestion = this.wishes.questions[questionNumber];
    // alert("question is " + this.selectedQuestion.question_string);
  }

  /* *************************************************************************************************************** */
  setWishes(wishes:WishesWizard) {
    this.wishes = wishes;
    this.selectedQuestion = wishes.questions[0];
  }

  /* *************************************************************************************************************** */
  setDate(date:string) {
    this.now = date;
  }

  /* *************************************************************************************************************** */
  setDefaultName(name:string) {
    this.wishes.client_name = name;
  }

  /* *************************************************************************************************************** */
  cancelWizard() {
    //   alert("am cancelling for client " + this.wishes.client_name);
    this.page = 0;
    this.errorMessage='';
    this.wishes.client_name='';
    this.closeModal();
  }

  /* *************************************************************************************************************** */
  getCurrentDate() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }


}
