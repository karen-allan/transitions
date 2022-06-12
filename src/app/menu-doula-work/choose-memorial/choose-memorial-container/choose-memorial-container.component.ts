import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-memorial-container',
  templateUrl: './choose-memorial-container.component.html',
  styleUrls: ['./choose-memorial-container.component.css']
})
export class ChooseMemorialContainerComponent implements OnInit {

  menuItemId:number  = 4;
  subMenuItemId:number = 43;

  detailHeaderName = 'header-choose-memorial'
  title='Ceremonies and Funerals'
  detailListName="list-doula-work"

  constructor() { }

  ngOnInit(): void {
  }

}
