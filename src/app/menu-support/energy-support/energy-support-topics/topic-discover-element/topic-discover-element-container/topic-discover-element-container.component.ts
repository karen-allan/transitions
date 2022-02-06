import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../../service-files/data.service";


@Component({
  selector: 'app-topic-discover-element-container',
  templateUrl: './topic-discover-element-container.component.html',
  styleUrls: ['./topic-discover-element-container.component.css']
})
export class TopicDiscoverElementContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 31;
  topicMenuItemId = 325;

  detailHeaderName = 'discover-element'
  title='Discover Your Element'

  constructor() { }

  ngOnInit(): void {

  }

}
