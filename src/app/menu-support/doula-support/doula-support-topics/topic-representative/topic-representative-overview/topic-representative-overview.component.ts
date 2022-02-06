import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic-representative-overview',
  templateUrl: './topic-representative-overview.component.html',
  styleUrls: ['./topic-representative-overview.component.css']
})
export class TopicRepresentativeOverviewComponent implements OnInit {

  @Input() title ='';

  constructor() { }

  ngOnInit(): void {
  }

}
