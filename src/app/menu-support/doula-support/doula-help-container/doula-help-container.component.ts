import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doula-help-container',
  templateUrl: './doula-help-container.component.html',
  styleUrls: ['./doula-help-container.component.css']
})
export class DoulaHelpContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 32;
  topicMenuItemId = 310;

  detailHeaderName = 'header-topic-eol-questions'
  title='Questions to Think About'
  detailListName="list-doula"

  constructor() { }

  ngOnInit(): void {
  }

}
