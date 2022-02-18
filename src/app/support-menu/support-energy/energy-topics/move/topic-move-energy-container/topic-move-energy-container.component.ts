import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-topic-move-energy-container',
  templateUrl: './topic-move-energy-container.component.html',
  styleUrls: ['./topic-move-energy-container.component.css']
})
export class TopicMoveEnergyContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 31;
  topicMenuItemId = 324;

  detailHeaderName = 'header-topic-energy-help-exercises'
  title='Move your Energy With Exercise'
  detailListName="list-move"

  constructor() { }

  ngOnInit(): void {

  }


}
