import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-ceremony-container',
  templateUrl: './topic-ceremony-container.component.html',
  styleUrls: ['./topic-ceremony-container.component.css']
})
export class TopicCeremonyContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 32;
  topicMenuItemId = 316;

  detailHeaderName = 'header-topic-eol-ceremony'
  title='Ceremonies and Funerals'

  constructor() { }

  ngOnInit(): void {
  }

}
