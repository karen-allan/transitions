import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plan-ahead-overview',
  templateUrl: './plan-ahead-overview.component.html',
  styleUrls: ['./plan-ahead-overview.component.css']
})
export class PlanAheadOverviewComponent implements OnInit {

  @Input() title ='';

  constructor() { }

  ngOnInit(): void {
  }


}
