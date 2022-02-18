import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic-advocate-overview',
  templateUrl: './topic-advocate-overview.component.html',
  styleUrls: ['./topic-advocate-overview.component.css']
})
export class TopicAdvocateOverviewComponent implements OnInit {

  @Input() title ='';
  constructor() { }

  ngOnInit(): void {
  }

}
