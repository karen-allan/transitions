import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent implements OnInit {

  menuItemId = 4
  subMenuItemId = 40

  detailHeaderName = 'header-book'
  detailListName="list-book"
  title= "Booking Information"

  constructor() { }

  ngOnInit(): void {
  }

}
