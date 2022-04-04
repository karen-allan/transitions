import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-session-container',
  templateUrl: './book-session-container.component.html',
  styleUrls: ['./book-session-container.component.css']
})
export class BookSessionContainerComponent implements OnInit {

  menuItemId:number = 5;
  subMenuItemId:number = 50;

  detailHeaderName = 'header-book-session'
  title='About Energy Sessions'

  constructor() { }

  ngOnInit(): void {

  }

}
