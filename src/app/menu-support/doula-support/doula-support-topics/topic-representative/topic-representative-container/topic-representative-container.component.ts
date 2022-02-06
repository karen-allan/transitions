import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-representative-container',
  templateUrl: './topic-representative-container.component.html',
  styleUrls: ['./topic-representative-container.component.css']
})
export class TopicRepresentativeContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 32;
  topicMenuItemId = 311;

  detailHeaderName = 'header-topic-eol-reps'
  title='Choose Who Cares For You'

  constructor() { }

  ngOnInit(): void {
  }

}
