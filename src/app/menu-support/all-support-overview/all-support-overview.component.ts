import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-support-overview',
  templateUrl: './all-support-overview.component.html',
  styleUrls: ['./all-support-overview.component.css']
})
export class AllSupportOverviewComponent implements OnInit {

  @Input() title:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
