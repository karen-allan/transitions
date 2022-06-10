import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dnr-overview',
  templateUrl: './dnr-overview.component.html',
  styleUrls: ['./dnr-overview.component.css']
})
export class DnrOverviewComponent implements OnInit {

  @Input() title:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
