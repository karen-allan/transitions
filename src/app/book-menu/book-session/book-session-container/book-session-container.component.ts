import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-session-container',
  templateUrl: './book-session-container.component.html',
  styleUrls: ['./book-session-container.component.css']
})
export class BookSessionContainerComponent implements OnInit {

  menuItemId = 4
  subMenuItemId = 41

  detailHeaderName = 'header-session'
  title='Book a Session'
  detailListName="list-book-session"

  constructor() { }

  ngOnInit(): void {
  }

}
