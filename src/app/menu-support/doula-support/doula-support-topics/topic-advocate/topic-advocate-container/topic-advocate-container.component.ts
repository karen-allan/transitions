import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-advocate-container',
  templateUrl: './topic-advocate-container.component.html',
  styleUrls: ['./topic-advocate-container.component.css']
})
export class TopicAdvocateContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 32;
  topicMenuItemId = 312;

  detailHeaderName = 'header-topic-eol-advocate'

  title='Advocating for Your Care'


  constructor() { }

  ngOnInit(): void {
  }

}
