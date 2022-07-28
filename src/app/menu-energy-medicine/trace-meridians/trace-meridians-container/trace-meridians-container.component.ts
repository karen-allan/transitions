import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trace-meridians-container',
  templateUrl: './trace-meridians-container.component.html',
  styleUrls: ['./trace-meridians-container.component.css']
})
export class TraceMeridiansContainerComponent implements OnInit {

  menuItemId:number   = 2;
  subMenuItemId:number = 25;

  detailHeaderName = 'header-energy-meridians'
  title='Know your Meridians'


  constructor() { }

  ngOnInit(): void {
  }

}
