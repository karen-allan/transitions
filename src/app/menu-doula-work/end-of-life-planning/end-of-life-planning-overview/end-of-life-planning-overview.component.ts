import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-end-of-life-planning-overview',
  templateUrl: './end-of-life-planning-overview.component.html',
  styleUrls: ['./end-of-life-planning-overview.component.css']
})
export class EndOfLifePlanningOverviewComponent implements OnInit {

  @Input() title='';
  constructor() { }

  ngOnInit(): void {
  }

}
