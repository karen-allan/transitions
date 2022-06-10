import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acp-container',
  templateUrl: './acp-container.component.html',
  styleUrls: ['./acp-container.component.css']
})
export class AcpContainerComponent implements OnInit {

  menuItemId:number  = 6;
  subMenuItemId:number = 65

  detailHeaderName="header-acplan"
  title="ADVANCED CARE PLANS"

  constructor() { }

  ngOnInit(): void {
  }

}
