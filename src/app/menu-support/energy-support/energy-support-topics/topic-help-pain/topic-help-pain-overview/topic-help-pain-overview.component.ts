import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic-help-pain-overview',
  templateUrl: './topic-help-pain-overview.component.html',
  styleUrls: ['./topic-help-pain-overview.component.css']
})
export class TopicHelpPainOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
