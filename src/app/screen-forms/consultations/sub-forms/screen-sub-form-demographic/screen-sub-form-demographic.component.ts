import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../../ts-files/client";
import {DataService} from "../../../../service-files/data.service";

@Component({
  selector: 'app-screen-sub-form-demographic',
  templateUrl: './screen-sub-form-demographic.component.html',
  styleUrl: './screen-sub-form-demographic.component.css'
})
export class ScreenSubFormDemographicComponent {

  @Input() @Output() client: Client;

  now:string;
  dateError = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.checkForValidDate();
  }


  /* *************************************************************************************************************** */
  checkForValidDate(): void {
    //19621123
    if (this.client.birthdate.length > 0 && this.client.birthdate != '') {
      this.dataService.checkIfMonthStartDateIsValid(this.client.birthdate)
          .subscribe(newVar => this.dateError = newVar);

      if(this.dateError) {
        // alert("This is not a valid date.");
        this.client.birthdate="";
      }
    }
  }

}
