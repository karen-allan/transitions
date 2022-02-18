import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-help-burnout-container',
  templateUrl: './topic-help-burnout-container.component.html',
  styleUrls: ['./topic-help-burnout-container.component.css']
})
export class TopicHelpBurnoutContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 31;
  topicMenuItemId = 322;

  detailHeaderName = 'header-topic-energy-help-burnout'
  title='Energy Help for Caregiver Burnout'
  detailListName="list-burnout"

  constructor() { }

  ngOnInit(): void {
  }

}
