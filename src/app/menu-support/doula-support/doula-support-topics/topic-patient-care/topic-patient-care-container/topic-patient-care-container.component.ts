import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-patient-care-container',
  templateUrl: './topic-patient-care-container.component.html',
  styleUrls: ['./topic-patient-care-container.component.css']
})
export class TopicPatientCareContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 32;
  topicMenuItemId = 313;

  detailHeaderName = 'header-topic-eol-patient-care'

  title='Care for the Patient'

  constructor() { }

  ngOnInit(): void {
  }

}
