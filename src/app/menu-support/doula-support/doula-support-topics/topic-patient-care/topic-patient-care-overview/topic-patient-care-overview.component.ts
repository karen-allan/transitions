import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic-patient-care-overview',
  templateUrl: './topic-patient-care-overview.component.html',
  styleUrls: ['./topic-patient-care-overview.component.css']
})
export class TopicPatientCareOverviewComponent implements OnInit {


  @Input() title ='';

  constructor() { }

  ngOnInit(): void {
  }

}
