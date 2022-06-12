import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-care-for-patients-container',
  templateUrl: './care-for-patients-container.component.html',
  styleUrls: ['./care-for-patients-container.component.css']
})
export class CareForPatientsContainerComponent implements OnInit {

  menuItemId:number  = 4;
  subMenuItemId:number = 40;

  detailHeaderName = 'header-care-for-patients'
  title='Caring till the end'
  detailListName="list-doula-work"

  constructor() { }

  ngOnInit(): void {
  }

}
