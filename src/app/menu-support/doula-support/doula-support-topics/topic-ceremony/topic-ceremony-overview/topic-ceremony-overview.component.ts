import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-ceremony-overview',
  templateUrl: './topic-ceremony-overview.component.html',
  styleUrls: ['./topic-ceremony-overview.component.css']
})
export class TopicCeremonyOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
