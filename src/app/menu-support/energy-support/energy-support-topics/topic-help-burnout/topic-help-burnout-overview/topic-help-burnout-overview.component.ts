import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-help-burnout-overview',
  templateUrl: './topic-help-burnout-overview.component.html',
  styleUrls: ['./topic-help-burnout-overview.component.css']
})
export class TopicHelpBurnoutOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
