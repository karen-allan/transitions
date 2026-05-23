import {Component, EventEmitter, Input} from '@angular/core';
import {AdvanceDirective} from "../../../../ts-files/advance_directive";
import {DataService} from "../../../../service-files/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-screen-form-write-directive-overview',
  templateUrl: './screen-form-write-directive-overview.component.html',
  styleUrl: './screen-form-write-directive-overview.component.css'
})
export class ScreenFormWriteDirectiveOverviewComponent {

  @Input() directive:AdvanceDirective;
  @Input() modal:boolean;
  @Input() event: EventEmitter<any> = new EventEmitter();

  errorMessage: string;
  title: string = "Title";

  page: number = 0;
  finalPage: number = 16;
  now: string;

  updatedValue: string = "";
  validDate = false;

  //choseAll: boolean=false;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
  }

  /* *************************************************************************************************************** */
  ngOnInit(): void {

    this.page = 0;
    this.clearData();
  //  this.initializeData();
    this.setCurrentDateForHeader();

  }

  /* *************************************************************************************************************** */
  setCurrentDateForHeader() {
    // @ts-ignore
    const today = new Date();
    this.now = formatDate(today, 'longDate', 'en-US')
  }


  /* *************************************************************************************************************** */
  checkClientName(): void {

    /* These are the only required fields */
    if (this.directive.client_name == '' && this.directive.client_name.length==0) {
      this.errorMessage = "You must enter your full name below.";
      return;
    }
    else {
      this.dataService.splitNames(this.directive.client_name)
          .subscribe(newName => this.updatedValue = newName);

      this.directive.client_name = this.updatedValue;
      // alert("cappedName is " + this.directive.client_name);

      this.dataService.getFirstName(this.directive.client_name)
          .subscribe(firstName => this.updatedValue = firstName);
      this.directive.client_first_name = this.updatedValue;
       //alert("first Name is " + this.directive.client_first_name);
    }

    if (this.directive.client_dob != '' && this.directive.client_dob.length > 0) {

      var error = this.checkForValidDate();
      if (error.length > 0 && error != '') {
        this.errorMessage = error;
        return;
      }
    }

    if (this.directive.client_address.length != 0)  {
      this.directive.client_address= this.updateAddress(this.directive.client_address);
    }

    if (this.directive.client_city.length != 0)  {
       this.directive.client_city= this.updateAddress(this.directive.client_city);
    }

    this.getNextPage();

  }

  /* *************************************************************************************************************** */
  updateAddress(addrText): string {

    this.dataService.splitNames(addrText)
      .subscribe(newName => this.updatedValue = newName);

     return(this.updatedValue);

  }

  /* *************************************************************************************************************** */

  /* called from the html */
  checkForValidDate(): string {
    var error = "";
    //19621123
    if (this.directive.client_dob != '') {
      this.dataService.checkIfDateIsValid(this.directive.client_dob)
          .subscribe(newVar => this.validDate = newVar);

      if (this.validDate == false) {
        error = "This is not a valid date. Enter as yyyy/mm/dd"
      }

    }
    return (error);
  }

  /* *************************************************************************************************************** */
  checkWitness1Name(): void {

    if (this.directive.witness_one_name != '') {
      this.dataService.splitNames(this.directive.witness_one_name)
          .subscribe(newName => this.updatedValue = newName);

      this.directive.witness_one_name = this.updatedValue;
    }

    if (this.directive.witness_one_address.length != 0)  {
      this.directive.witness_one_address= this.updateAddress(this.directive.witness_one_address);
    }

    if (this.directive.witness_one_city.length != 0)  {
      this.directive.witness_one_city= this.updateAddress(this.directive.witness_one_city);
    }

    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  checkWitness2Name(): void {

    if (this.directive.witness_two_name != '') {
      this.dataService.splitNames(this.directive.witness_two_name)
          .subscribe(newName => this.updatedValue = newName);

      this.directive.witness_two_name = this.updatedValue;
    }

    if (this.directive.witness_two_address.length != 0)  {
      this.directive.witness_two_address= this.updateAddress(this.directive.witness_two_address);
    }

    if (this.directive.witness_two_city.length != 0)  {
      this.directive.witness_two_city= this.updateAddress(this.directive.witness_two_city);
    }

    this.getNextPage();

  }

  /* ***************************************************************************************************************
  * this is the one where on page 3 where they have chosen either Section 3 or Section 4. If Section 3 they just
  * continue onto next page and since Section 4 is only one page (10) they go directly there. */
 /* moveSectionChoiceGoingForward(): void {
    if (this.directive.choose_section == "chooseSection3") {
      this.getNextPage();

    } else if (this.directive.choose_section == "chooseSection4") {
      this.skipToPage(10);
    }

  }*/

   /*setSectionChosen(): void {
    if (this.directive.choose_section == "chooseSection3") {
      this.choseAll = false;

    } else if (this.directive.choose_section == "chooseSection4") {
    //  this.skipToPage(10);
      this.choseAll = true;
    }

  //  alert("chosen all is " + this.choseAll)
     this.getNextPage();

  }*/

  /* ***************************************************************************************************************
  * this is the one where on page 10 (and only Section 4 people can be on this page)
  * If they want to go back they go directly back to 3. */
 /* moveSection4GoingBackwards(): void {

    if (this.directive.choose_section == "chooseSection4") {
      this.skipToPage(3);
    }

  }*/

  /* ***************************************************************************************************************
  * this is the one where on page 9 (and only Section 3 people can be on this page) to move forward they must skip
  * over page 10 which is Section 4s page */
/*  moveSection3GoingForwards(): void {
    if (this.directive.choose_section == "chooseSection3") {
      this.skipNextPage();
    }
  }*/

  /* ***************************************************************************************************************
    * this is the one where on page 11 (and both can be on this page) to move backward they must skip
    * over page 10 which is Section 4s page and land back 2 pages back to Section 3 */
 /* moveSection3GoingBackwards(): void {
    if (this.directive.choose_section == "chooseSection3") {
      //  alert("skip back 2 pages ")
      this.skipPreviousPage();
    }
  }*/

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
  skipPreviousPage() {
    this.page = this.page - 2;
    // alert("to this page " + this.page)
  }

  /* *************************************************************************************************************** */
  skipToPage(skipToPage: number) {
    this.page = skipToPage;
  }

  /* *************************************************************************************************************** */
  initializeData() {

    //this.directive.client_name = ""
    this.directive.client_name = "doris rutabaga day";
    //this.directive.client_address = ""
    this.directive.client_address = "123 West 5th Street";
    //this.directive.client_city = "";
    this.directive.client_city = "Surrey";
    //this.directive.client_postal = "";
    this.directive.client_postal = "V0E-1M8";
   // alert("postal is " + this.directive.client_postal)
    this.directive.client_dob = "19450911";
        //this.directive.client_phc_number = '',
        this.directive.client_phn = '9030254245';
        this.directive.client_organ_donor = 'organDonorNo';

    //this.directive.witness_one_name = '';
    this.directive.witness_one_name = 'bette jo davis';
    //this.directive.witness_one_address = ''

    this.directive.witness_one_address = '315-416, Sutton Crescent'
    this.directive.witness_one_city = 'Kelowna'
    this.directive.witness_one_postal = 'V1V-2J8'
    this.directive.witness_one_province = 'B.C.'

    //this.directive.witness_two_name = '';
    this.directive.witness_two_name = 'dirk bogart';
    this.directive.witness_two_address = '#27 - 870 West 7th Avenue';
    this.directive.witness_two_city = 'Princeton'
    this.directive.witness_two_postal = 'V5Z-4C1'
    this.directive.witness_two_province = 'B.C.'
    this.directive.witness_type = "";


    //this.directive.consent_given_notes = '',
    this.directive.consent_given_notes = 'I give consent for blood transfusions, pain medication and oxygen treatments. I also consent to' +
        ' intubation, sedation and any operations they feel I need in order to survive.'

    //this.directive.consent_refused_notes = '';
    this.directive.consent_refused_notes = 'I refuse treatments such as cutting off of my limbs. I do not want chemotherapy unless I have' +
        ' a good chance of surviving the disease.'

    this.directive.lift_sedation = 'liftSedationYes';

    this.directive.conditions1a = false;
    this.directive.conditions1b = false;
    this.directive.conditions1c = false;

    this.directive.die_at_home = "atHomeYes";
        this.directive.request_maid = "maidNo";
        this.directive.consent_maid_notes = "";

        this.directive.refusals2a = false;
    this.directive.refusals2b = false;
    this.directive.refusals2c = false;
    this.directive.refusals2d = false;
    this.directive.refusals2e = false;
    this.directive.refusals2f = false;
    this.directive.refusals2g = false;

    this.directive.palliative3a = false;
    this.directive.palliative3b = false;

    this.directive.prolong_life4 = false;
    this.directive.follow_acp1 = false;
    this.directive.follow_acp2 = false;

    this.directive.choose_section = "chooseSection3";

  }

  /* *************************************************************************************************************** */
  clearErrorMessage () {
    this.errorMessage = "";
  }

  /* *************************************************************************************************************** */
  checkFormToPrint(modal: boolean) {

    this.formatPHNToPrint();
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
  formatPHNToPrint(): void {

    if (this.directive.client_phn == '') {
      return;
    }

    // 9300 632 514
    //start at 0 element and stop before 4th element (6)
    // @ts-ignore
    let firstPHN = this.directive.client_phn.substring(0, 4);
    //start at 4th element (6) and end before 7th element (5)
    // @ts-ignore
    let secondPHN = this.directive.client_phn.substring(4, 7);
    //start at 7th element (5) and end before 10th element (at 9th element + 1) (4) ie 1 past the end
    let thirdPHN: string;
    // @ts-ignore
    thirdPHN = this.directive.client_phn.substring(7, 10);

    this.directive.client_phn = firstPHN + "-" + secondPHN + "-" + thirdPHN;
  }

  /* *************************************************************************************************************** */
  formatBirthdateToPrint(): void {

    // This is a string like '19621123'
    if (this.directive.client_dob === '') {
      return;
    }

    this.dataService.formatYearStartBirthdateToPrint(this.directive.client_dob)
        .subscribe(newName => this.updatedValue = newName);

    this.directive.client_dob = this.updatedValue;

  }

  /* *************************************************************************************************************** */
  printDialogForm() {
    this.event.emit({directive: this.directive, print: true});
  }

  /* *************************************************************************************************************** */
  printRegularForm() {
    window.print();
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
    this.errorMessage = '';

    this.directive.client_name = ""
      this.directive.client_address = ""
      this.directive.client_city = ""
      //default province
      this.directive.client_postal = ""
      this.directive.client_dob = ""
      this.directive.client_phn = ""
      this.directive.client_organ_donor = 'organDonorNo'

      this.directive.witness_one_name = ""
      this.directive.witness_one_address = ""
      this.directive.witness_one_city = ""
      this.directive.witness_one_postal = ""
      this.directive.witness_one_province = "B.C."

      this.directive.witness_two_name = ""
      this.directive.witness_two_address = ""
      this.directive.witness_two_city = ""
      this.directive.witness_two_postal = ""
      this.directive.witness_two_province = "B.C."

      this.directive.witness_type = "";

      this.directive.consent_given_notes = ""
      this.directive.consent_refused_notes = ''
      this.directive.lift_sedation = 'liftSedationNo'

      this.directive.conditions1a = false
      this.directive.conditions1b = false
      this.directive.conditions1c = false

      this.directive.die_at_home = "atHomeYes"
      this.directive.request_maid = "maidNo"
      this.directive.consent_maid_notes = ""

      this.directive.refusals2a = false
      this.directive.refusals2b = false
      this.directive.refusals2c = false
      this.directive.refusals2d = false
      this.directive.refusals2e = false
      this.directive.refusals2f = false
      this.directive.refusals2g = false

      this.directive.palliative3a = false
      this.directive.palliative3b = false

      this.directive.prolong_life4 = true
      this.directive.follow_acp1 = false
      this.directive.follow_acp2 = false
      this.directive.choose_section = "chooseSection3"
  }

  /* *************************************************************************************************************** */
  closeModal(): void {
    this.event.emit({directive: this.directive, print: false});
  }

  /* *************************************************************************************************************** */
  closeForm(): void {
    this.router.navigate([`/writeCarePlan`], { relativeTo: this.route });
  }


}