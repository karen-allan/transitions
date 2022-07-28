import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-of-life-documents-container',
  templateUrl: './end-of-life-documents-container.component.html',
  styleUrls: ['./end-of-life-documents-container.component.css']
})
export class EndOfLifeDocumentsContainerComponent implements OnInit {

  menuItemId:number  = 3;
  subMenuItemId:number = 31;

  detailHeaderName="header-end-of-life-documents"
  title="Before you go, sign on these dotted lines"

  constructor() { }

  ngOnInit(): void {
  }

}
