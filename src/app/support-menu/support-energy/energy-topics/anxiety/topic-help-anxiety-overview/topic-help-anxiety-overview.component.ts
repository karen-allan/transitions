import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic-help-anxiety-overview',
  templateUrl: './topic-help-anxiety-overview.component.html',
  styleUrls: ['./topic-help-anxiety-overview.component.css']
})
export class TopicHelpAnxietyOverviewComponent implements OnInit {

  @Input() title ='';

  constructor() { }

  ngOnInit(): void {
  }

}
