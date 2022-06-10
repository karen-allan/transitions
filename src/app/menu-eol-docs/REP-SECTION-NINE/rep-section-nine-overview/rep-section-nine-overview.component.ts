import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rep-section-nine-overview',
  templateUrl: './rep-section-nine-overview.component.html',
  styleUrls: ['./rep-section-nine-overview.component.css']
})
export class RepSectionNineOverviewComponent implements OnInit {

  @Input() title:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
