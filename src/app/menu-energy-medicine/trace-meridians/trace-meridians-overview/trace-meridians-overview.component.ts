import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trace-meridians-overview',
  templateUrl: './trace-meridians-overview.component.html',
  styleUrls: ['./trace-meridians-overview.component.css']
})
export class TraceMeridiansOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
