import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decrease-pain-container',
  templateUrl: './decrease-pain-container.component.html',
  styleUrls: ['./decrease-pain-container.component.css']
})
export class DecreasePainContainerComponent implements OnInit {

  menuItemId:number = 2;
  subMenuItemId:number = 22;

  detailHeaderName = 'header-energy-pain'
  title='Decrease Your Pain'


  constructor() { }

  ngOnInit(): void {
  }

}
