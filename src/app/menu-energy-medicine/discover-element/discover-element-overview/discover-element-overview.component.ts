import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-element-overview',
  templateUrl: './discover-element-overview.component.html',
  styleUrls: ['./discover-element-overview.component.css']
})
export class DiscoverElementOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
