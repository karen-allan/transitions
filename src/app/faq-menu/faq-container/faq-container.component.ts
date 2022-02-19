import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-container',
  templateUrl: './faq-container.component.html',
  styleUrls: ['./faq-container.component.css']
})
export class FaqContainerComponent implements OnInit {

  menuItemId = 5
  subMenuItemId = 0

  detailHeaderName="header-faq"
  title="Frequently Asked Questions"

  constructor() { }

  ngOnInit(): void {
  }

}
