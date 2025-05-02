import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../../../ts-files/client";
import {DataService} from "../../../../service-files/data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-screen-sub-form-disclaimer',
  templateUrl: './screen-sub-form-disclaimer.component.html',
  styleUrl: './screen-sub-form-disclaimer.component.css'
})
export class ScreenSubFormDisclaimerComponent implements OnInit {

  @Input() @Output() client:Client;
  errorMessage:string;
  updatedValue:string="";
  validDate = false;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  /*********************************************************************************/
  ngOnInit(): void {
     this.errorMessage="";
  }

  /* *************************************************************************************************************** */
  /* Function is called from the html page.  r... */
  /* *************************************************************************************************************** */
  checkClientName(): void {

    /* These are the only required fields */
    if (this.client.name.length == 0) {
      this.errorMessage = "Please enter your name in the section above.";
      return;
    }
    else {
      this.dataService.splitNames(this.client.name)
          .subscribe(newName => this.updatedValue = newName);

      this.client.name = this.updatedValue;
    }

    if (this.client.birthdate != '' && this.client.birthdate.length > 0) {

      var error = this.checkForValidDate();
      if (error.length > 0 && error != '') {
        this.errorMessage = error;
        return;
      }
    }

    this.printProfile();
    this.closeForm()
  }

  /* *************************************************************************************************************** */
  /* called from the html */
  checkForValidDate(): string {
    var error = "";
    //19621123
    //  alert("client dob is " + this.rep.client_dob);
    if (this.client.birthdate != '') {
      this.dataService.checkIfDateIsValid(this.client.birthdate)
          .subscribe(newVar => this.validDate = newVar);

      if (this.validDate == false) {
        error = "This is not a valid date";
      }

    }
    return (error);
  }

  /*********************************************************************************/
  printProfile() {
    window.print();
  }

  /* *************************************************************************************************************** */
  closeForm(): void {
    this.errorMessage="";
    this.router.navigate([`/bookConsultation`], { relativeTo: this.route });
  }
}
