import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-consult-container',
  templateUrl: './book-consult-container.component.html',
  styleUrls: ['./book-consult-container.component.css']
})
export class BookConsultContainerComponent implements OnInit {

  menuItemId = 4
  subMenuItemId = 42

  detailHeaderName = 'header-consult'
  title='Book a Consultation'
  detailListName="list-book-consult"

  constructor() { }

  ngOnInit(): void {
  }

}
