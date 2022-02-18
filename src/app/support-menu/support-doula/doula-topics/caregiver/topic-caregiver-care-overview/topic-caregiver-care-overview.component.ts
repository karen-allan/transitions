import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic-caregiver-care-overview',
  templateUrl: './topic-caregiver-care-overview.component.html',
  styleUrls: ['./topic-caregiver-care-overview.component.css']
})
export class TopicCaregiverCareOverviewComponent implements OnInit {

  @Input() title ='';

  constructor() { }

  ngOnInit(): void {
  }

}
