import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-know-meridians-container',
  templateUrl: './topic-know-meridians-container.component.html',
  styleUrls: ['./topic-know-meridians-container.component.css']
})
export class TopicKnowMeridiansContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 31;
  topicMenuItemId = 326;

  detailHeaderName = 'header-topic-energy-help-meridians'
  title='Know your Meridians'

  constructor() { }

  ngOnInit(): void {
  }

}
