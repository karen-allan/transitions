import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relieve-burnout-container',
  templateUrl: './relieve-burnout-container.component.html',
  styleUrls: ['./relieve-burnout-container.component.css']
})
export class RelieveBurnoutContainerComponent implements OnInit {

  menuItemId:number  = 3;
  subMenuItemId:number = 31;

  detailHeaderName = 'header-relieve-burnout'
  title='Relieve your Burnout'
  detailListName="list-energy-medicine"

  constructor() { }

  ngOnInit(): void {
  }

}
