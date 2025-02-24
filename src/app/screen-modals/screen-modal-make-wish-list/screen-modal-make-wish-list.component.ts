import {Component, EventEmitter} from '@angular/core';
import {WishesWizard} from "../../ts-files/wishes-wizard";
import {Question} from "../../ts-files/question";
import {formatDate} from "@angular/common";
import {MatDialogRef} from "@angular/material/dialog";
import {DataService} from "../../service-files/data.service";

@Component({
  selector: 'app-screen-modal-make-wish-list',
  templateUrl: './screen-modal-make-wish-list.component.html',
  styleUrl: './screen-modal-make-wish-list.component.css'
})
export class ScreenModalMakeWishListComponent {

  errorMessage:string;
  wishes:WishesWizard;
  title:string = "Title";

  page:number=0;
  finalPage:number=30;
  now:string;

  updatedValue:string;
  selectedQuestion:Question;

  public event: EventEmitter<any> = new EventEmitter();

  //printForm:boolean=false;

 constructor(public dialogRef: MatDialogRef<ScreenModalMakeWishListComponent>, private dataService: DataService) { }

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.page = 0;
    //this.page = 29;
    this.getCurrentDate();
    this.setClientDefaults();
  }

  /* *************************************************************************************************************** */
  setClientDefaults() {
    this.wishes.client_name="benedict cucumber"
     // alert("client_name is  " +this.wishes.client_name)
  }

  printFunction(){
     this.event.emit({wishes: this.wishes, print: true});
  }

  onAnswerChanged(value) {
    // this.selectedQuestion.responses[value].response_string;
    this.selectedQuestion.selectedAnswer = value;
  }

  /* *************************************************************************************************************** */
  checkClientName(): void {
     if (this.wishes.client_name.length == 0 && this.wishes.client_name == "")  {
       this.errorMessage = "Please enter your name here.";
       return;
     }
     else {
       this.errorMessage = "";

       this.dataService.splitNames(this.wishes.client_name)
           .subscribe(newName => this.updatedValue = newName);

       this.wishes.client_name = this.updatedValue;

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

  setWishes(wishes:WishesWizard, title:string) {
    this.wishes = wishes;
    this.selectedQuestion = wishes.questions[0];
      // alert("the selectedQuestion is being set " + this.selectedQuestion.question_string )
    this.title=title;
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
     //  alert("am cancelling for client " + this.wishes.client_name);
    this.page = 0;
    this.errorMessage='';
    this.wishes.client_name='';
      this.closeModal();

  }

    /* *************************************************************************************************************** */
    /* Set in make-wishes-overview.ts */
    closeModal(): void {
        this.event.emit({rep: this.wishes, print: false});
    }

  /* *************************************************************************************************************** */
  getCurrentDate() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

  /* *************************************************************************************************************** */

}
