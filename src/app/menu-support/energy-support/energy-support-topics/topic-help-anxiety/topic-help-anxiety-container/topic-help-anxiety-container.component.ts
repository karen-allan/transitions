import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-help-anxiety-container',
  templateUrl: './topic-help-anxiety-container.component.html',
  styleUrls: ['./topic-help-anxiety-container.component.css']
})
export class TopicHelpAnxietyContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 31;
  topicMenuItemId = 321;

  detailHeaderName = 'header-topic-energy-help-anxiety'
  title='Energy Help for Anxiety'

  constructor() { }

  ngOnInit(): void {
  }

}
