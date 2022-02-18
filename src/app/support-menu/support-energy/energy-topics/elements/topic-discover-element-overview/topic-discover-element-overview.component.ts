import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic-discover-element-overview',
  templateUrl: './topic-discover-element-overview.component.html',
  styleUrls: ['./topic-discover-element-overview.component.css']
})
export class TopicDiscoverElementOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  /*********************************************************************************/

  ngOnInit(): void {

  }

}
