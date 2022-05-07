import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-me-overview',
  templateUrl: './about-me-overview.component.html',
  styleUrls: ['./about-me-overview.component.css']
})
export class AboutMeOverviewComponent implements OnInit {

  @Input() title:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
