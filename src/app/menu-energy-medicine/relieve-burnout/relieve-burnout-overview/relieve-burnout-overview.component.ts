import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-relieve-burnout-overview',
  templateUrl: './relieve-burnout-overview.component.html',
  styleUrls: ['./relieve-burnout-overview.component.css']
})
export class RelieveBurnoutOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
