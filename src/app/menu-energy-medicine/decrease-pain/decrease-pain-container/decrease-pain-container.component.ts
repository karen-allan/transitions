import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decrease-pain-container',
  templateUrl: './decrease-pain-container.component.html',
  styleUrls: ['./decrease-pain-container.component.css']
})
export class DecreasePainContainerComponent implements OnInit {

  menuItemId:number = 3;
  subMenuItemId:number = 32;

  detailHeaderName = 'header-decrease-pain'
  title='Decrease Your Pain'
  detailListName="list-energy-medicine"

  constructor() { }

  ngOnInit(): void {
  }

}
