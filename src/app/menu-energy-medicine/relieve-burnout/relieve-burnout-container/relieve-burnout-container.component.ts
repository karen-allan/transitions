import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relieve-burnout-container',
  templateUrl: './relieve-burnout-container.component.html',
  styleUrls: ['./relieve-burnout-container.component.css']
})
export class RelieveBurnoutContainerComponent implements OnInit {

  menuItemId:number  = 2;
  subMenuItemId:number = 21;

  detailHeaderName = 'header-energy-burnout'
  title='Relieve your Burnout'


  constructor() { }

  ngOnInit(): void {
  }

}
