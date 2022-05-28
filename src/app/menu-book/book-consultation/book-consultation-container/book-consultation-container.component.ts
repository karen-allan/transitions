import { Component, OnInit } from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-book-consultation-container',
  templateUrl: './book-consultation-container.component.html',
  styleUrls: ['./book-consultation-container.component.css']
})
export class BookConsultationContainerComponent implements OnInit {

  menuItemId:number   = 5;
  subMenuItemId:number = 51;

  detailHeaderName = 'header-book-consultation'
  title='Book a Consultation'
  detailListName="list-book";
  selectedIntakeForm='caregiver';

  model  = new Client(0, '', '','' ,'' ,'', '', '','Canada' ,
      '', '','' ,'', '', '', '', false,
      false ,false ,false ,false ,false, false,false,
      false,'','', '', '', false, false,false,
      false, '', '', '', '', '','','', '');

  constructor() { }

  ngOnInit(): void {
  }

  printProfile() {
    window.print();
  }

}
