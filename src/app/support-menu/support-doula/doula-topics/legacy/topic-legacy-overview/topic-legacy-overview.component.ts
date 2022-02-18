import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic-legacy-overview',
  templateUrl: './topic-legacy-overview.component.html',
  styleUrls: ['./topic-legacy-overview.component.css']
})
export class TopicLegacyOverviewComponent implements OnInit {

  @Input() title ='';

  constructor() { }

  ngOnInit(): void {
  }

}
