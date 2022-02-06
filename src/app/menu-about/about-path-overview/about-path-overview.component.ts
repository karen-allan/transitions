import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-path-overview',
  templateUrl: './about-path-overview.component.html',
  styleUrls: ['./about-path-overview.component.css']
})
export class AboutPathOverviewComponent implements OnInit {

  @Input() subjectItemId: string ='';
  @Input() title:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
