import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-support-container',
  templateUrl: './all-support-container.component.html',
  styleUrls: ['./all-support-container.component.css']
})
export class AllSupportContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 30;

  detailHeaderName = "header-support"
  detailListName = "list-support"
  title = "Support and Care For Everyone"

  constructor() { }

  ngOnInit(): void {
  }

}
