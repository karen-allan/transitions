import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-overview',
  templateUrl: './about-overview.component.html',
  styleUrls: ['./about-overview.component.css']
})
export class AboutOverviewComponent implements OnInit {

  @Input() subjectItemId: string ='';
  @Input() title:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
