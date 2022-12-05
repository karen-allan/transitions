import { Component, OnInit } from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-book-consultation-container',
  templateUrl: './book-consultation-container.component.html',
  styleUrls: ['./book-consultation-container.component.css']
})
export class BookConsultationContainerComponent implements OnInit {

  menuItemId:number   = 3;
  subMenuItemId:number = 31;

  detailHeaderName = 'header-book-consultation'
  title='Book a Consultation'
  detailListName="list-book";
  selectedIntakeForm='caregiver';

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
  }

  printProfile() {
    window.print();
  }

}
