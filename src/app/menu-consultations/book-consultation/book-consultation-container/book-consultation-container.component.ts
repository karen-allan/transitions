import {Component} from '@angular/core';
import {Client} from "../../../ts-files/client";
import {BOOK_CONSULTATION} from "src/app/ts-files/constants";


@Component({
  selector: 'app-book-consultation-container',
  templateUrl: './book-consultation-container.component.html',
  styleUrls: ['./book-consultation-container.component.css']
})
export class BookConsultationContainerComponent {

  menuItemId:number   = 3;
  subMenuItemId:number = 31;

  title= BOOK_CONSULTATION;
  quote='Sometimes the greatest adventure is simply a conversation.';
  author='Amadeus Wolfe'

  consult1a:string=  "How to Plan for my Future Care";
  consult1b:string=  "How to Plan for your Future Care";

  consult2a:string=  "My Need for Support as Caregiver";
  consult2b:string=  "Your Need for Support as Caregiver";

  consult3a:string=  "My Need for Support as Patient";
  consult3b:string=  "Your Need for Support as Patient";

  selectedIntakeForm='';

 client= new Client(0, "", "", "", "", "", "B.C.", "",
     "","", "", "", "", "",
     "", false,false, false, false, false, false,
     false, false,false, "",
     "", false, false, false,false, false, false,
     false, false,"", false, false, false,
     false, false, false, false, false, false,
     false, false,false, "", false, false,
     false,false, false, false, false, false,
     false, false, "", "");


  constructor() { }

    ngOnInit(): void {
       this.selectedIntakeForm='planning';
    }

    setIntakeFormType(name:string) {
        this.selectedIntakeForm=name;
        //alert("in container selectedIntakeForm is " + this.selectedIntakeForm)
    }




}
