import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-help-pain-container',
  templateUrl: './topic-help-pain-container.component.html',
  styleUrls: ['./topic-help-pain-container.component.css']
})
export class TopicHelpPainContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 31;
  topicMenuItemId = 323;

  detailHeaderName = 'header-topic-energy-help-pain'
  title='Reduce Pain with Energy Medicine'

  constructor() { }

  ngOnInit(): void {
  }

}
