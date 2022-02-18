import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-caregiver-care-container',
  templateUrl: './topic-caregiver-care-container.component.html',
  styleUrls: ['./topic-caregiver-care-container.component.css']
})
export class TopicCaregiverCareContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 32;
  topicMenuItemId = 314;

  detailHeaderName = 'header-topic-eol-caregiver-care'

  title='Care for the Caregiver'
  detailListName="list-caregiver"

  constructor() { }

  ngOnInit(): void {
  }

}
