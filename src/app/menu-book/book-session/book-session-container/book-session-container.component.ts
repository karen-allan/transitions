import { Component, OnInit } from '@angular/core';
import {Client} from "../../../ts-files/client";

@Component({
  selector: 'app-book-session-container',
  templateUrl: './book-session-container.component.html',
  styleUrls: ['./book-session-container.component.css']
})
export class BookSessionContainerComponent implements OnInit {

  menuItemId:number = 5;
  subMenuItemId:number = 50;

  detailHeaderName = 'header-book-session'
  title='Book a Session'

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
