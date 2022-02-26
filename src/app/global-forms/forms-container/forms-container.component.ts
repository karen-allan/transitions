import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-container',
  templateUrl: './forms-container.component.html',
  styleUrls: ['./forms-container.component.css']
})
export class FormsContainerComponent implements OnInit {

  detailHeaderName="header-forms"
  title="Book a Session"

  menuItemId=4;
  subMenuItemId = 0

  constructor() { }

  ngOnInit(): void {
  }

}
