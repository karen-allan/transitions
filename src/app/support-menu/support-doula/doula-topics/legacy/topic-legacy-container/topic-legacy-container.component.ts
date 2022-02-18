import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-legacy-container',
  templateUrl: './topic-legacy-container.component.html',
  styleUrls: ['./topic-legacy-container.component.css']
})
export class TopicLegacyContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 32;
  topicMenuItemId = 315;

  detailHeaderName = 'header-topic-eol-legacy'
  title='Leaving a Legacy'
  detailListName="list-legacy"

  constructor() { }

  ngOnInit(): void {
  }

}
