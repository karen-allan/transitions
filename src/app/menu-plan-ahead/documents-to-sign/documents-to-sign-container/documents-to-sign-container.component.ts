import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents-to-sign-container',
  templateUrl: './documents-to-sign-container.component.html',
  styleUrls: ['./documents-to-sign-container.component.css']
})
export class DocumentsToSignContainerComponent implements OnInit {

  menuItemId:number  = 2;
  subMenuItemId:number = 22;

  detailHeaderName="header-documents-to-sign"
  title="Before you go"
  subtitle='sign on the dotted line'
  constructor() { }

  ngOnInit(): void {
  }

}
