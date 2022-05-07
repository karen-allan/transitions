import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-representative-container',
  templateUrl: './choose-representative-container.component.html',
  styleUrls: ['./choose-representative-container.component.css']
})
export class ChooseRepresentativeContainerComponent implements OnInit {

  menuItemId:number   = 4;
  subMenuItemId:number = 41;

  detailHeaderName = 'header-choose-representative'
  title='Choose Who Cares For You'
  detailListName="list-doula-work"

  constructor() { }

  ngOnInit(): void {
  }

}
