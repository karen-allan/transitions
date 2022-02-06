import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic-know-meridians-overview',
  templateUrl: './topic-know-meridians-overview.component.html',
  styleUrls: ['./topic-know-meridians-overview.component.css']
})
export class TopicKnowMeridiansOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
