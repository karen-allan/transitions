import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {WishesWizard} from "../../../../ts-files/wishes-wizard";
import {Question} from "../../../../ts-files/question";
import {DataService} from "../../../../service-files/data.service";
import {formatDate} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-screen-form-make-wish-list-overview',
  templateUrl: './screen-form-make-wish-list-overview.component.html',
  styleUrl: './screen-form-make-wish-list-overview.component.css'
})

export class ScreenFormMakeWishListOverviewComponent implements OnInit {

  errorMessage:string;
  @Input() wishes:WishesWizard;
  @Input() modal:boolean;
  @Input() event: EventEmitter<any> = new EventEmitter();

  title:string = "Title";
  page:number=0;
  finalPage=30;
  pastLastPage:number=31;
  selectedQuestion:Question;
  now:string;
  updatedValue:string="";
  firstNameValue:string=";"

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute ) {
  }

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.page = 0;
    //
    this.clearData()
    //this.initializeData();
    this.getCurrentDate();

  }

  /* *************************************************************************************************************** */
  initializeData() {
    this.wishes.client_name="glory mogas gonzales allan"
  }

  /* *************************************************************************************************************** */
  onAnswerChanged(value) {
    this.selectedQuestion.selectedAnswer = value;
  }

  /* *************************************************************************************************************** */
  checkClientName(): void {
    if (this.wishes.client_name.length == 0 && this.wishes.client_name == "")  {
      this.errorMessage = "You must enter your full name below.";
      return;
    }
    else {
      this.errorMessage = "";

      this.dataService.splitNames(this.wishes.client_name)
          .subscribe(newName => this.updatedValue = newName);

      this.wishes.client_name = this.updatedValue;
    //  alert("cappedName is " + this.wishes.client_name);

      this.dataService.getFirstName(this.wishes.client_name)
          .subscribe(firstName => this.updatedValue = firstName);
      this.wishes.client_first_name = this.updatedValue;
     // alert("first Name is " + this.wishes.client_first_name);

      this.getNextPage();
    }
  }

  /* *************************************************************************************************************** */
  getNextPage() {
    if (this.page > 0) {
      // Questions start on page 1, not page 0
      this.wishes.questions[this.page-1].selectedAnswer = this.selectedQuestion.selectedAnswer;
    }
    this.page = this.page + 1;
    this.getQuestion(this.page);
  }

  /* *************************************************************************************************************** */
  getPreviousPage() {
    if (this.page == this.pastLastPage) {
       // alert("this is page " + this.page);
        this.page = this.page - 1;
      //  alert("this is page " + this.page);
        this.getQuestion(this.page);
    }
        else {
        this.wishes.questions[this.page-1].selectedAnswer = this.selectedQuestion.selectedAnswer;
        this.page = this.page - 1;
        this.getQuestion(this.page);
    }
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
  getCurrentDate() {
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

  /* *************************************************************************************************************** */
  checkFormToPrint(modal: boolean) {

    // alert("BOO and modal is " + modal);
     if (modal) {
      this.printDialogForm();
    }

    if (!modal) {
      this.printRegularForm();
    }
  }

  /* *************************************************************************************************************** */
  printRegularForm(){
      window.print()
  }

  /* *************************************************************************************************************** */
  printDialogForm(){
    this.event.emit({wishes: this.wishes, print: true});
  }

  /* *************************************************************************************************************** */
  checkFormToCancel(modal: boolean) {

    if (modal) {
      this.cancelDialogForm();
    }
    if (!modal) {
      this.cancelRegularForm();
    }
  }

  /* *************************************************************************************************************** */
  cancelDialogForm() {
   // this.clearData();
    this.closeModal();
  }

  /* *************************************************************************************************************** */
  cancelRegularForm() {
    this.clearData();
    this.closeForm();
  }

  /* *************************************************************************************************************** */
  clearData() {
    this.page = 0;
    this.errorMessage = '';
    this.wishes.client_name = '';
  }

  /* *************************************************************************************************************** */
  /* Set in make-wish-list-overview.ts and passed thru from screen-modal-make-wish-list */
  closeModal(): void {
     this.event.emit({wishes: this.wishes, close: true});
    //this.router.navigate([`/makeWishList`], { relativeTo: this.route });
  }

  /* *************************************************************************************************************** */
  closeForm(): void {
    this.router.navigate([`/makeWishList`], { relativeTo: this.route });
  }

}
