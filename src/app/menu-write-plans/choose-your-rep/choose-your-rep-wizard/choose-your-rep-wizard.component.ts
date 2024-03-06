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
  finalPage:number=8;
  now:string;

  public event: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<ChooseYourRepWizardComponent>) { }

  /* *************************************************************************************************************** */
  ngOnInit(): void {
    this.page = 7;

    this.setCurrentDateForHeader();
    /* will remove the defaults once done testing */

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
  checkClientNameAddress(): void {
    if (this.rep.client_name.length == 0 || this.rep.client_name == "") {
      this.errorMessage = "You must enter your name here.";
      return;
    }
    if (this.rep.client_address.length == 0 || this.rep.client_address == "") {
      this.errorMessage = "You must enter your full address here.";
      return;
    }

   /* if (this.rep.publish_date.length == 0) {
      this.errorMessage = "You must enter the date here.";
      return;
    }
    if (this.rep.publish_date.length != 0) {
      if (!moment(this.rep.publish_date, "YYYY/MM/DD").isValid()) {
        this.errorMessage = "You must enter a valid date in format yyyy/mm/dd.";
        return;
      }
    }
*/
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

    if (this.rep.signing_date !== '' && this.rep.signing_date.length > 0) {
      if (!moment(this.rep.signing_date, "YYYY/MM/DD").isValid()) {
        this.errorMessage = "You must enter a valid date in format yyyy/mm/dd.";
        return;
      }
      else {
        this.rep.publish_date = this.formatDateString(this.rep.signing_date);
        alert("rep.publish date is " + this.rep.publish_date);
      }
    }

    this.errorMessage='';
    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  formatDateString(dateString:string) {
    var formattedDate:string ='';

    if (dateString != '') {
      const yrstr = dateString.substring(0,4);
      const mntstr = dateString.substring(4,6);
      const daystr = dateString.substring(6);
      formattedDate = yrstr + "/" + mntstr + "/" + daystr;

      return(formattedDate);
    }
    else {
      return "";
    }
  }

  parseDate(value: any): Date | null {
    if ((typeof value === 'string') && (value !== null)) {
      const yrstr = value.substring(0,4);
      alert("yrstr is " + yrstr);

      const mntstr = value.substring(4,6);
      alert("mntstr is " + mntstr);

      const daystr = value.substring(6);
      alert("daystr is " + daystr);

      const year = Number(yrstr);
      const month = Number(mntstr) - 1;
      const date = Number(daystr);

      return new Date(year, month, date);
    } else if((typeof value === 'string') && value === '') {
      return new Date();
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
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
    this.rep.publish_date=null;
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
