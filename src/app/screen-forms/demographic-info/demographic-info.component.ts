import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../ts-files/client";
import {formatDate} from "@angular/common";
import {DataService} from "../../service-files/data.service";

@Component({
  selector: 'app-demographic-info',
  templateUrl: './demographic-info.component.html',
  styleUrls: ['./demographic-info.component.css']
})

export class DemographicInfoComponent implements OnInit {

    @Input() @Output() client: Client;

    now:string;
    dateError = false;

    provinces = ['British Columbia', 'Alberta', 'Saskatchewan', 'Manitoba', 'Ontario', 'Quebec', 'Prince Edward Island', 'New Brunswick', 'Nova Scotia', 'Newfoundland',
        'Northwest Territories', 'Nunavut', 'Yukon'];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      this.client.provState= this.provinces[0];
      this.initializeData();
      this.checkForValidDate();
  }

    /* *************************************************************************************************************** */
    initializeData() {
        this.client.name = "Karen Gail Allan"
        this.client.cellPhone="6043453442"
        this.client.email="karen@mindworks-software.com"
        this.client.address="2608 Airstrip Road"
        this.client.city="Anglemont"
        this.client.provState="B.C."
        this.client.pc="V5W0P3"
        this.client.country="Canada"

        this.client.birthdate="06191980"
        this.client.occupation='Ruler of the Universe'
        this.client.referredBy="Sandra Bullock"

        this.client.emergName="Michael Roy Allan"
        this.client.emergPhone="6047817732"
        this.client.emergRelation="Spicy Lover"

        this.client.medsSupplements="High Blood Pressure pills, Vitamins, Sleeping Pills, CBD"
        this.client.highBloodPressure=true;
        this.client.mentalIllness=true;
        this.client.autoImmuneDisease=true;
        this.client.eolFrailty="frailtyChart-1"
        this.client.eolPatientFocus3 = true;
        this.client.eolPatientFocus5 = true;
        this.client.eolPatientFocus7 = true;
        this.client.eolPatientFocus9 = true;
        this.client.eolPatientFocus10 = true;

        this.client.eolPatientDetails="I can not say much as everyone is listening and i am not being paranoid. And you are also listening!"
        this.client.illnessDetails="The details of my illnesses are at best indescribable sorry spelling mistake"

        this.client.eolCaregiverFocus10=true;
        this.client.eolCaregiverFocus5=true;
        this.client.eolCaregiverFocus3=true;

        this.client.eolCaregiverDetails="I am left all alone to do everything while all they think about is the money they are going to make" +
            " off the inheritance."

        this.client.eolPlanFocus2=true;
        this.client.eolPlanFocus4=true;
        this.client.eolPlanFocus6=true;
        this.client.eolPlanFocus8=true;

        this.client.eolPlanDetails="I want to plan everything so my kids don't have to do this on their own. It is the least I can do."
    }

    /* *************************************************************************************************************** */
    /* called from the html */
    checkForValidDate(): void {

        //19621123
        if (this.client.birthdate.length > 0 && this.client.birthdate != '') {
            this.dataService.checkIfMonthStartDateIsValid(this.client.birthdate)
                .subscribe(newVar => this.dateError = newVar);

            if(this.dateError) {
               // alert("This is not a valid date.");
                this.client.birthdate="";
            }
            else {
              //  alert("this is a valid date")
            }

        }
      //  return (this.errorMessage);
    }


}
