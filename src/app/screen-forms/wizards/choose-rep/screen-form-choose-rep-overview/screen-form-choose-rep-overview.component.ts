import {Component, EventEmitter, Input} from '@angular/core';
import {RepNine} from "../../../../ts-files/rep-nine";
import {formatDate} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../../../service-files/data.service";

@Component({
  selector: 'app-screen-form-choose-rep-overview',
  templateUrl: './screen-form-choose-rep-overview.component.html',
  styleUrl: './screen-form-choose-rep-overview.component.css'
})
export class ScreenFormChooseRepOverviewComponent {

  @Input() rep:RepNine;
  @Input() modal:boolean;
  @Input() event: EventEmitter<any> = new EventEmitter();

  title:string = "Title";
  errorMessage:string;
  page:number=0;
  finalPage:number=12;
  now:string;

  updatedValue:string="";
  validDate = false;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
  }

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.page = 0;
   // this.initializeData();
    this.clearData();
    this.setCurrentDateForHeader();
  }

  /* *************************************************************************************************************** */
  setCurrentDateForHeader() {
    // @ts-ignore
    const today = new Date();
    this.now= formatDate(today, 'longDate',  'en-US')
  }

  /* *************************************************************************************************************** */
  /* Function is called from the html page.  r... */
  /* *************************************************************************************************************** */
  checkClientName(): void {

    /* These are the only required fields */
    if (this.rep.client_name.length == 0) {
      this.errorMessage = "You must enter your full name here.";
      return;
    }
    else {
      this.dataService.splitNames(this.rep.client_name)
          .subscribe(newName => this.updatedValue = newName);

      this.rep.client_name = this.updatedValue;
    }

    if (this.rep.client_dob != '' && this.rep.client_dob.length > 0) {

      var error = this.checkForValidDate();
      if (error.length > 0 && error != '') {
        this.errorMessage = error;
        return;
      }
    }

    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  /* called from the html */
  checkForValidDate(): string {
    var error = "";
    //19621123
   //  alert("client dob is " + this.rep.client_dob);
    if (this.rep.client_dob != '') {
      this.dataService.checkIfDateIsValid(this.rep.client_dob)
          .subscribe(newVar => this.validDate = newVar);

      if (this.validDate == false) {
        error = "This is not a valid date."
      }

    }
    return (error);
  }

  /* *************************************************************************************************************** */
  checkRep1Name(): void {

    if (this.rep.rep_primary_name != '') {
      this.dataService.splitNames(this.rep.rep_primary_name)
          .subscribe(newName => this.updatedValue = newName);

      this.rep.rep_primary_name = this.updatedValue;
    }

    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  clearErrorMessage () {
    this.errorMessage = "";
  }

  /* *************************************************************************************************************** */
  checkRep2Name(): void {
    if (this.rep.rep_alternate_name != '') {
      this.dataService.splitNames(this.rep.rep_alternate_name)
          .subscribe(newName => this.updatedValue = newName);

      this.rep.rep_alternate_name = this.updatedValue;
    }

    this.getNextPage();

  }

  /* *************************************************************************************************************** */
  checkWitness1Name(): void {

    if (this.rep.witness_one_name != '') {
      this.dataService.splitNames(this.rep.witness_one_name)
          .subscribe(newName => this.updatedValue = newName);

      this.rep.witness_one_name = this.updatedValue;
    }

    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  checkWitness2Name(): void {

    if (this.rep.witness_two_name != '') {
      this.dataService.splitNames(this.rep.witness_two_name)
          .subscribe(newName => this.updatedValue = newName);

      this.rep.witness_two_name = this.updatedValue;
    }

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

     if (this.errorMessage!="") {
      this.clearErrorMessage();
    }

    this.page = this.page - 1;
  }

  /* *************************************************************************************************************** */
  skipNextPage() {
    this.page = this.page + 2;
  }

  /* *************************************************************************************************************** */
  checkFormToPrint(modal: boolean) {

    this.formatBirthdateToPrint();

    if (modal) {
      // alert("this is a modal  form " + modal)
      this.printDialogForm();
    }
    if (!modal) {
      //  alert("this is NOT a modal  form " + modal)
      this.printRegularForm();
    }
  }

  /* *************************************************************************************************************** */
  formatBirthdateToPrint(): void {
    // This is a string like '19621123'
    if (this.rep.client_dob === '') {
      return;
    }

    this.dataService.formatYearStartBirthdateToPrint(this.rep.client_dob)
        .subscribe(newName => this.updatedValue = newName);

    this.rep.client_dob = this.updatedValue;

  }

  /* *************************************************************************************************************** */
  printRegularForm() {
    window.print();
  }

  /* *************************************************************************************************************** */
  /* Set in choose-rep-overview.ts */
  printDialogForm(){
    this.event.emit({rep: this.rep, print: true});
  }

  /* *************************************************************************************************************** */
  initializeData() {

    //this.rep.client_name = ""
    this.rep.client_name="michael roy allan";
    //this.rep.client_address = "";
    this.rep.client_address = "2608 Airstrip Road";
    //this.rep.client_city = "";
    this.rep.client_city = "Anglemont";
    //this.rep.client_postal = "";
    this.rep.client_postal = "V0E-1M8";
    this.rep.global_province= 'British Columbia';
    this.rep.client_dob = "19621123";

    this.rep.rep_primary_name='marcus liam allan';
    this.rep.rep_primary_address='207-6911 Salisbury Avenue';
    this.rep.rep_primary_city='Burnaby';
    this.rep.rep_primary_postal='V5E 2Z6';
    this.rep.rep_primary_province= 'B.C.';

    this.rep.rep_alternate_name='nathan emory allan';
    this.rep.rep_alternate_address='203-3163 Riverwalk Avenue';
    this.rep.rep_alternate_city='Vancouver';
    this.rep.rep_alternate_postal='V5S-0A8';
    this.rep.rep_alternate_province= 'B.C.';

    //this.rep.witness_one_name = '';
    this.rep.witness_one_name='roy allan';
    //this.rep.witness_one_address = '';
    this.rep.witness_one_address='5519 Huston Road';
    this.rep.witness_one_city='Chilliwack';
    this.rep.witness_one_postal='V4Z-1E5';
    this.rep.witness_one_province= 'B.C.';

    //this.rep.witness_two_name = '';
    this.rep.witness_two_name='april jones';
    // this.rep.witness_two_address = '';
    this.rep.witness_two_address='#27 - 870 West 7th Avenue';
    this.rep.witness_two_city='Vancouver';
    this.rep.witness_two_postal='V5Z-4C1';
    this.rep.witness_two_province= 'B.C.';

    //this.rep.instructions_for_reps = '';
    this.rep.instructions_for_reps = "Please find all of my documents in our hard shell safe found in the office. There you will find" +
        " the wills, the advanced care plan, my wish list for care, my cpr form, edith form, insurance forms, the wealth management" +
        " information and the bank account information.";

    this.rep.witness_type = "";
    this.rep.choose_alternate = 'chooseAlternateYes';

  }

  /* *************************************************************************************************************** */
  checkFormToCancel(modal: boolean) {

    if (modal) {
     // alert("this is a modal  form " + modal)
      this.cancelDialogForm();
    }
    if (!modal) {
    //  alert("this is NOT a modal  form " + modal)
      this.cancelRegularForm();
    }
  }

  /* *************************************************************************************************************** */
  cancelDialogForm() {
    this.clearData();
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
    this.errorMessage='';

    this.rep.global_province= 'British Columbia';

    this.rep.client_name = "";
    this.rep.client_address = "";
    this.rep.client_city = "";
    this.rep.client_postal = "";
    this.rep.client_dob = "";

    this.rep.rep_primary_name='';
    this.rep.rep_primary_address='';
    this.rep.rep_primary_city='';
    this.rep.rep_primary_postal='';
    this.rep.rep_primary_province='';

    this.rep.rep_alternate_name='';
    this.rep.rep_alternate_address='';
    this.rep.rep_alternate_city='';
    this.rep.rep_alternate_postal='';
    this.rep.rep_alternate_province='';

    this.rep.witness_one_name='';
    this.rep.witness_one_address=''
    this.rep.witness_one_city='';
    this.rep.witness_one_postal='';

    this.rep.witness_type = "";
    this.rep.witness_two_name='';
    this.rep.witness_two_address=''
    this.rep.witness_two_city='';
    this.rep.witness_two_postal='';
    this.rep.choose_alternate = 'chooseAlternateYes';
    this.rep.instructions_for_reps = "";
  }

  /* *************************************************************************************************************** */
  /* Set in choose-rep-overview.ts */
  closeModal(): void {
    this.event.emit({rep: this.rep, close: true});
  }

  /* *************************************************************************************************************** */
  closeForm(): void {
    this.router.navigate([`/chooseReps`], { relativeTo: this.route });
  }
}
