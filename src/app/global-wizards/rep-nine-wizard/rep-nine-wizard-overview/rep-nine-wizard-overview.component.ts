import {Component, Input, OnInit} from '@angular/core';
import { RepNine} from "../../../ts-files/rep-nine";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
// import {PlanWizardPopupComponent} from "../../../menu-plan-ahead/think-about-needs/think-about-needs-wizard/plan-wizard-popup/plan-wizard-popup.component";

@Component({
  selector: 'app-rep-nine-wizard-overview',
  templateUrl: './rep-nine-wizard-overview.component.html',
  styleUrls: ['./rep-nine-wizard-overview.component.css']
})

export class RepNineWizardOverviewComponent implements OnInit {

  provinces = ['British Columbia', 'Alberta', 'Saskatchewan', 'Manitoba', 'Ontario', 'Quebec', 'Prince Edward Island', 'New Brunswick', 'Nova Scotia', 'Newfoundland',
    'Northwest Territories', 'Nunavut', 'Yukon'];

  model  = new RepNine('', '', '', '', this.provinces[0], '',
      '', '', '', '', this.provinces[0],
      '', '', '', '', '',
      this.provinces[0], '', '', '', '', '',
      '', this.provinces[0], '', '',
      '', '', '', this.provinces[0], '', '');

  @Input() title='';
  page: number = -1;
  now:string;
  errorMessage:string='';
  public postalMask = [/[A-Y]/, /\d/, /[A-Z]/, /\d/, /[A-Z]/, /\d/];
  printForm:boolean=false;

  // @ViewChild(RepNineFinalComponent) repNineComponent: RepNineFinalComponent;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getCurrentDate();

    // this.setClientDefaults();
    this.setRepOneDefaults();
    this.setRepTwoDefaults();

    this.setWitnessOneDefaults();
    this.setWitnessTwoDefaults();

    this.getNextPage();
  }

 /* transform(value: any, args?: any): any {
    if (value !== null && value !== undefined) {
      if (value.length >= 4 && value.indexOf(' ') == -1) {
        return value.substring(0, 3) + "-" + value.substring(3, value.length);
      }
      return value;
    }
  }*/

  getNextPage() {
    this.page = this.page + 1;
    // alert("page is " + this.page)
  }

  finished() {
    this.page = this.page + 1;
    alert("page is " + this.page + " and we are done!")
  }

  printTSDM() {
    alert("printing this report!")
  }

  /* *************************************************************************************************************** */
  checkClientNameAddress(): void {
      if (this.model.client_name.length == 0) {
        this.errorMessage="You must enter your full legal name here.";
        return;
      }

      if (this.model.client_address.length == 0) {
        this.errorMessage="You must enter your full legal address here.";
        return;
      }

      if (this.model.client_city.length == 0) {
        this.errorMessage="You must enter your city, town or region here.";
        return;
      }

      if (this.model.client_postal.length == 0) {
        this.errorMessage="You must enter your postal code here.";
        return;
      }

      if (this.model.client_province.length == 0) {
        this.errorMessage="You must enter your province here.";
        return;
      }

      if (this.model.client_country.length == 0) {
        this.errorMessage="You must enter your country here.";
        return;
      }

      this.clearMessage()
      this.getNextPage();
  }

  /* *************************************************************************************************************** */
  checkPrimaryRepsNameAddress(): void {
    if (this.model.rep_primary_name.length == 0) {
      this.errorMessage="You must enter your Primary Representative's full legal name here.";
      return;
    }

    if (this.model.rep_primary_address.length == 0) {
      this.errorMessage="You must enter your Primary Representative's full legal address here.";
      return;
    }

    if (this.model.rep_primary_city.length == 0) {
      this.errorMessage="You must enter your Primary Representative's city, town or region here.";
      return;
    }

    if (this.model.rep_primary_postal.length == 0) {
      this.errorMessage="You must enter your Primary Representative's postal code here.";
      return;
    }

    if (this.model.rep_primary_province.length == 0) {
      this.errorMessage="You must enter your Primary Representative's province here.";
      return;
    }

    if (this.model.rep_primary_country.length == 0) {
      this.errorMessage="You must enter your Primary Representative's country here.";
      return;
    }

    this.clearMessage()
    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  checkAlternateRepsNameAddress(): void {

    if (this.model.rep_alternate_name.length == 0) {
      this.errorMessage="You must enter your Alternate Representative's full legal name here.";
      return;
    }

    if (this.model.rep_alternate_address.length == 0) {
      this.errorMessage="You must enter your Alternate Representative's full legal address here.";
      return;
    }

    if (this.model.rep_alternate_city.length == 0) {
      this.errorMessage="You must enter your Alternate Representative's city, town or region here.";
      return;
    }

    if (this.model.rep_alternate_postal.length == 0) {
      this.errorMessage="You must enter your Alternate Representative's postal code here.";
      return;
    }

    if (this.model.rep_alternate_province.length == 0) {
      this.errorMessage="You must enter your Alternate Representative's province here.";
      return;
    }

    if (this.model.rep_alternate_country.length == 0) {
      this.errorMessage="You must enter your Alternate Representative's country here.";
      return;
    }

    this.clearMessage()
    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  checkClientWishes() {
    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  checkWitnessOneNameAddress(): void {
    if (this.model.witness_one_name.length == 0) {
      this.errorMessage="You must enter your first Witness's full legal name here.";
      return;
    }

    if (this.model.witness_one_address.length == 0) {
      this.errorMessage="You must enter your first Witness's full legal address here.";
      return;
    }

    if (this.model.witness_one_city.length == 0) {
      this.errorMessage="You must enter your first Witness's city, town or region here.";
      return;
    }

    if (this.model.witness_one_postal.length == 0) {
      this.errorMessage="You must enter your first Witness's postal code here.";
      return;
    }

    if (this.model.witness_one_province.length == 0) {
      this.errorMessage="You must enter your first Witness's province here.";
      return;
    }

    if (this.model.witness_one_country.length == 0) {
      this.errorMessage="You must enter your first Witness's country here.";
      return;
    }

    this.clearMessage()
    this.getNextPage();

  }

  /* *************************************************************************************************************** */
  checkWitnessTwoNameAddress(): void {
    if (this.model.witness_two_name.length == 0) {
      this.errorMessage="You must enter your second Witness's full legal name here.";
      return;
    }

    if (this.model.witness_two_address.length == 0) {
      this.errorMessage="You must enter your second Witness's full legal address here.";
      return;
    }

    if (this.model.witness_two_city.length == 0) {
      this.errorMessage="You must enter your second Witness's city, town or region here.";
      return;
    }

    if (this.model.witness_two_postal.length == 0) {
      this.errorMessage="You must enter your second Witness's postal code here.";
      return;
    }

    if (this.model.witness_two_province.length == 0) {
      this.errorMessage="You must enter your second Witness's province here.";
      return;
    }

    if (this.model.witness_two_country.length == 0) {
      this.errorMessage="You must enter your second Witness's country here.";
      return;
    }

    this.clearMessage()
    this.getNextPage();

  }

  /* *************************************************************************************************************** */
  checkRep1Name(): void {
    if (this.model.rep_primary_name.length == 0) {
      this.errorMessage = "You must enter your Primary Representative's full legal name here.";
      return;
    }

    this.clearMessage()
    this.getNextPage();
  }

  /* *************************************************************************************************************** */
  checkRep2Name(): void {
    if (this.model.rep_alternate_name.length == 0) {
      this.errorMessage = "You must enter your Alternate Representative's full legal name here.";
      return;
    }

    this.clearMessage()
    this.getNextPage();
  }

  cancelWizard() {
    this.model.client_name = '';
    this.model.client_address ='';
    this.model.client_city ='';
    this.model.client_postal ='';
    this.model.client_province ='';
    this.model.client_country ='';

    this.model.rep_primary_name = '';
    this.model.rep_primary_address ='';
    this.model.rep_primary_city ='';
    this.model.rep_primary_postal ='';
    this.model.rep_primary_province ='';
    this.model.rep_primary_country ='';

    this.model.rep_alternate_name = '';
    this.model.rep_alternate_address ='';
    this.model.rep_alternate_city ='';
    this.model.rep_alternate_postal ='';
    this.model.rep_alternate_province ='';
    this.model.rep_alternate_country ='';

    this.model.witness_one_name = '';
    this.model.witness_one_address ='';
    this.model.witness_one_city ='';
    this.model.witness_one_postal ='';
    this.model.witness_one_province ='';
    this.model.witness_one_country ='';

    this.model.witness_two_name = '';
    this.model.witness_two_address ='';
    this.model.witness_two_city ='';
    this.model.witness_two_postal ='';
    this.model.witness_two_province ='';
    this.model.witness_two_country ='';

    this.model.optional_wishes = '';

    this.setClientDefaults();
    this.setRepOneDefaults();
    this.setRepTwoDefaults();

    this.page = 0;
    this.clearMessage()
    this.setClientDefaults();
  }

  cancelClientInfo() {
  /*  this.model.client_name = '';
    this.model.client_address ='';
    this.model.client_city ='';
    this.model.client_postal ='';
    this.model.client_province ='';
    this.model.client_country ='';
    this.model.signing_date = this.now;
*/


  }

  cancelPrimaryRepInfo() {
   /* this.model.rep_primary_name = '';
    this.model.rep_primary_address ='';
    this.model.rep_primary_city ='';
    this.model.rep_primary_postal ='';
    this.model.rep_primary_province ='';
    this.model.rep_primary_country ='';*/

   /* this.page = this.page-1;
    this.clearMessage()
    this.setRepOneDefaults();*/
  }

  cancelAlternateRepInfo() {
   /* this.model.rep_alternate_name = '';
    this.model.rep_alternate_address ='';
    this.model.rep_alternate_city ='';
    this.model.rep_alternate_postal ='';
    this.model.rep_alternate_province ='';
    this.model.rep_alternate_country ='';*/

    this.page = this.page-1;
    this.clearMessage()
    this.setRepTwoDefaults();
  }

  cancelWishesInfo() {
    this.model.optional_wishes = '';
    this.page = this.page-1;
    this.clearMessage();
  }

  cancelWitnessOneInfo() {
   /* this.model.witness_one_name= '';
    this.model.witness_one_address= '';
    this.model.witness_one_city= '';
    this.model.witness_one_province= '';
    this.model.witness_one_postal= '';
    this.model.witness_one_country= '';*/

    this.page = this.page-1;
    this.clearMessage();
    this.setWitnessOneDefaults();
  }

  cancelWitnessTwoInfo() {
  /*  this.model.witness_two_name= '';
    this.model.witness_two_address= '';
    this.model.witness_two_city= '';
    this.model.witness_two_province= '';
    this.model.witness_two_postal= '';
    this.model.witness_two_country= '';*/

    this.page = this.page-1;
    this.clearMessage();
    this.setWitnessTwoDefaults();
  }

  getCurrentDate() {
    var today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.now = yyyy +'/' + mm +'/' + dd;
    this.model.signing_date = this.now;
  }

  addSameAddressforPrimaryRep() {
    this.model.rep_primary_address = this.model.client_address;
    this.model.rep_primary_city = this.model.client_city;
    this.model.rep_primary_province = this.model.client_province;
    this.model.rep_primary_postal = this.model.client_postal;
    this.model.rep_primary_country = this.model.client_country;
  }

  addSameAddressforAlternateRep() {
    this.model.rep_alternate_address = this.model.client_address;
    this.model.rep_alternate_city = this.model.client_city;
    this.model.rep_alternate_province = this.model.client_province;
    this.model.rep_alternate_postal = this.model.client_postal;
    this.model.rep_alternate_country = this.model.client_country;
  }

  clearMessage() {
    this.errorMessage='';
  }

  setClientDefaults() {
    this.model.client_name='Karen Gail Allan';
    this.model.client_address='East 48 Woodstock Avenue'
    this.model.client_city='Vancouver'
    this.model.client_postal='V5M-0B7'
    this.model.client_province='British Columbia';
    this.model.client_country='Canada';
  }

  setRepOneDefaults() {
    this.model.rep_primary_name='Michael Roy Allan';
  }

  setRepTwoDefaults() {
    this.model.rep_alternate_name='Nathan Emory Allan';
    this.model.rep_alternate_address='1709 East 37th Street'
    this.model.rep_alternate_city='Vancouver'
    this.model.rep_alternate_postal='V5R-1R7'
    this.model.rep_alternate_province='British Columbia';
    this.model.rep_alternate_country='Canada';
  }

  setWitnessOneDefaults() {
    this.model.witness_one_name='Janice Lee McKai';
    this.model.witness_one_address='315-416, Sutton Crescent'
    this.model.witness_one_city='Kelowna'
    this.model.witness_one_postal='V1V-2J8'
    this.model.witness_one_province='British Columbia';
    this.model.witness_one_country='Canada';
  }

  setWitnessTwoDefaults() {
    this.model.witness_two_name='April Jones';
    this.model.witness_two_address='#27 - 870 West 7th Avenue'
    this.model.witness_two_city='Vancouver'
    this.model.witness_two_postal='V5Z-4C1'
    this.model.witness_two_province='British Columbia';
    this.model.witness_two_country='Canada';
  }

  /*printDocument() {
    this.printForm=true;
    this.repNineComponent.setModel(this.model);
    this.page=0;
  }*/

  /* *************************************************************************************************************** */
  openModal() {
   /* const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";

    let modalDialog = this.matDialog.open(PlanWizardPopupComponent, dialogConfig);
    // modalDialog.componentInstance.setWishes(this.wishes);
    modalDialog.componentInstance.setDate(this.now);
    // modalDialog.componentInstance.setDefaultName(this.wishes.client_name);
    modalDialog.componentInstance.event.subscribe(resp => {
      // this.wishes = resp.wishes;
      this.printForm = resp.print;
      modalDialog.close();
    })*/
    // modalDialog.afterClosed().subscribe(() => {this.printWishes();});
  }

 }
