import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tsdm-wizard-overview',
  templateUrl: './tsdm-wizard-overview.component.html',
  styleUrls: ['./tsdm-wizard-overview.component.css']
})
export class TsdmWizardOverviewComponent implements OnInit {

  @Input() title: string;
  page: number = -1;
  now:string;
  clientName:string;
  clientDate:string;

  spouseName:string;
  spousePhone:string;

  adultChild1Name:string;
  adultChild1Phone:string;

  adultChild2Name:string;
  adultChild2Phone:string;

  adultChild3Name:string;
  adultChild3Phone:string;

  adultChild4Name:string;
  adultChild4Phone:string;

  constructor() {
  }

  ngOnInit(): void {
    this.getCurrentDate()
    this.getNextPage()

  }

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

  saveClientNamePhone(name: string, date: string): void {
    if (name== '' || date == '') {
      if (name == '') {
        alert("You must enter your name here.")
      }
      if (date == '') {
        alert("You must enter the date here.")
      }
    }
    else if (name!= '' && date!= '') {
      if (name != '') {
        // alert("saved name is " + name + ' and saved date is '+ date)
        this.clientName = name;
      }
      if (date != '') {
        // alert("saved name is " + name + ' and saved date is '+ date)
        this.clientDate = date;
      }
      this.getNextPage();
    }
  }

  saveSpousesNamePhone(name: string, phone: string): void {
    if (name== '' || phone == '') {
      if (name == '') {
        alert("You must enter your spouses name here.")
      }
      if (phone == '') {
        alert("You must enter their phone number here.")
      }
    }
    else if (name!= '' && phone!= '') {
      if (name != '') {
        // alert("saved name is " + name + ' and saved date is '+ date)
        this.spouseName = name;
      }
      if (phone != '') {
        // alert("saved name is " + name + ' and saved date is '+ date)
        this.spousePhone = phone;
      }
      this.getNextPage();
    }
  }

  saveChildrensNamePhone(name1: string, phone1: string, name2: string, phone2: string,
                         name3: string, phone3: string, name4: string, phone4: string): void {

    if ( (name1== '' && phone1 == '') || (name2== '' && phone2 == '') || (name3== '' && phone3 == '') || (name4== '' && phone4 == '')) {
        alert("You must enter your adult child's name and phone number here if you want to save their information.")
    }
    else if (name1 != '' && phone1 != '')  {
        this.adultChild1Name = name1;
        this.adultChild1Phone = phone1;
    }
    else if (name2 != '' && phone2 != '')  {
      this.adultChild2Name = name2;
      this.adultChild2Phone = phone2;
    }
    else if (name3 != '' && phone3 != '')  {
      this.adultChild3Name = name3;
      this.adultChild3Phone = phone3;
    }
    else if (name4 != '' && phone4 != '')  {
      this.adultChild4Name = name4;
      this.adultChild4Phone = phone4;
    }
    this.getNextPage();
  }

  saveParentsNamePhone(name1: string, phone1: string, name2: string, phone2: string): void {
    if (name1 != '' && phone1 != '') {
      alert("saved name 1 is " + name1 + ' and saved phone 1 is ' + phone1)
      this.getNextPage();
    }
    if (name2 != '' && phone2 != '') {
      alert("saved name 2 is " + name2 + ' and saved phone 2 is ' + phone2)
      this.getNextPage();
    }

    if (name1 == '' || phone1 == '' || name2 == '' || phone2 == '') {
      alert("You must enter the name and phone number for at least one parent you are choosing.")
    }
  }

  saveSiblingsNamePhone(name1: string, phone1: string, name2: string, phone2: string,
                         name3: string, phone3: string, name4: string, phone4: string): void {
    if (name1 != '' && phone1 != '') {
      alert("saved name 1 is " + name1 + ' and saved phone 1 is ' + phone1)
      this.getNextPage();
    }
    if (name2 != '' && phone2 != '') {
      alert("saved name 2 is " + name2 + ' and saved phone 2 is ' + phone2)
      this.getNextPage();
    }
    if (name3 != '' && phone3 != '') {
      alert("saved name 3 is " + name3 + ' and saved phone 3 is ' + phone3)
      this.getNextPage();
    }
    if (name4 != '' && phone4 != '') {
      alert("saved name 4 is " + name4 + ' and saved phone 4 is ' + phone4)
      this.getNextPage();
    }

    if (name1 == '' || phone1 == '' || name2 == '' || phone2 == '' || name3 == '' || phone3 == '' || name4 == '' || phone4 == '') {
      alert("You must enter the name and phone number for at least one sibling you are choosing.")
    }
  }

  saveGrandParentsNamePhone(name1: string, phone1: string, name2: string, phone2: string): void {
    if (name1 != '' && phone1 != '') {
      alert("saved name 1 is " + name1 + ' and saved phone 1 is ' + phone1)
      this.getNextPage();
    }
    if (name2 != '' && phone2 != '') {
      alert("saved name 2 is " + name2 + ' and saved phone 2 is ' + phone2)
      this.getNextPage();
    }

    if (name1 == '' || phone1 == '' || name2 == '' || phone2 == '') {
      alert("You must enter the name and phone number for at least one parent you are choosing.")
    }
  }

  saveGrandChildsNamePhone(name1: string, phone1: string, name2: string, phone2: string,
                         name3: string, phone3: string, name4: string, phone4: string): void {
    if (name1 != '' && phone1 != '') {
      alert("saved name 1 is " + name1 + ' and saved phone 1 is ' + phone1)
      this.getNextPage();
    }
    if (name2 != '' && phone2 != '') {
      alert("saved name 2 is " + name2 + ' and saved phone 2 is ' + phone2)
      this.getNextPage();
    }
    if (name3 != '' && phone3 != '') {
      alert("saved name 3 is " + name3 + ' and saved phone 3 is ' + phone3)
      this.getNextPage();
    }
    if (name4 != '' && phone4 != '') {
      alert("saved name 4 is " + name4 + ' and saved phone 4 is ' + phone4)
      this.getNextPage();
    }

    if (name1 == '' || phone1 == '' || name2 == '' || phone2 == '' || name3 == '' || phone3 == '' || name4 == '' || phone4 == '') {
      alert("You must enter the name and phone number for at least one grandchild you are choosing.")
    }
  }

  cancelWizard() {
    this.page = 0;
    // alert("page is " + this.page)
  }

  getCurrentDate() {
    //let today= new Date('yyyy-MM-dd')
    // let formattedDate = {{date | date:'yyyy-MM-dd'}}
    // this.now = today;


    var today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.now = mm + '/' + dd + '/' + yyyy;

  }

  saveFriendsNamePhone(name1: string, phone1: string, name2: string, phone2: string): void {
    if (name1 != '' && phone1 != '') {
      alert("saved name 1 is " + name1 + ' and saved phone 1 is ' + phone1)
      this.getNextPage();
    }
    if (name2 != '' && phone2 != '') {
      alert("saved name 2 is " + name2 + ' and saved phone 2 is ' + phone2)
      this.getNextPage();
    }

    if (name1 == '' || phone1 == '' || name2 == '' || phone2 == '') {
      alert("You must enter the name and phone number for at least one friend you are choosing.")
    }
  }

  saveInlawRelativeNamePhone(name1: string, phone1: string, name2: string, phone2: string): void {
    if (name1 != '' && phone1 != '') {
      alert("saved name 1 is " + name1 + ' and saved phone 1 is ' + phone1)
      this.getNextPage();
    }
    if (name2 != '' && phone2 != '') {
      alert("saved name 2 is " + name2 + ' and saved phone 2 is ' + phone2)
      this.getNextPage();
    }

    if (name1 == '' || phone1 == '' || name2 == '' || phone2 == '') {
      alert("You must enter the name and phone number for at least one friend you are choosing.")
    }
  }

  scrollToTest() {
    //this.viewportScroller.().scrollToAnchor('why-tsdm');
  }
}
