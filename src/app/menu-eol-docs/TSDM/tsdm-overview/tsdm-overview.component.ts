import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tsdm-overview',
  templateUrl: './tsdm-overview.component.html',
  styleUrls: ['./tsdm-overview.component.css']
})
export class TsdmOverviewComponent implements OnInit {

  @Input() title:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
