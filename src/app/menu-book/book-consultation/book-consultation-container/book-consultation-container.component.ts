import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
