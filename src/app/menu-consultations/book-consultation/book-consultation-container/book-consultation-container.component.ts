import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../../ts-files/client";
import {BOOK_CONSULTATION} from "src/app/ts-files/constants";
import {BookConsultationOverviewComponent} from "../book-consultation-overview/book-consultation-overview.component";

@Component({
  selector: 'app-book-consultation-container',
  templateUrl: './book-consultation-container.component.html',
  styleUrls: ['./book-consultation-container.component.css']
})
export class BookConsultationContainerComponent {

  menuItemId:number   = 3;
  subMenuItemId:number = 31;

  detailHeaderName = 'header-book-consultation'
  title= BOOK_CONSULTATION;
  quote='Sometimes the greatest adventure is simply a conversation.';
  author='Amadeus Wolfe'

  selectedIntakeForm='';

 client= new Client(0, "", "", "", "", "", "", "", "",
     "", "", "", "", "", "", "",
     false, false, false, false, false, false, false,
     false, false, "", "", "", "",
     false, false, false, false, "",
     false, false, false, false, false, false,
     false, false, "", false, false, false,
     false, false, false, false, false,
     false, false, false, false, "",
     false, false, false, false, false,
     false, false, false, false, false,
     "", "");


  constructor() { }

    ngOnInit(): void {
       this.selectedIntakeForm='planning';
    }

    setIntakeFormType(name:string) {
        this.selectedIntakeForm=name;
        //alert("in container selectedIntakeForm is " + this.selectedIntakeForm)
    }




}
