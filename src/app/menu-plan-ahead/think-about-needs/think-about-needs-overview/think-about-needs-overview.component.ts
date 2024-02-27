import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-think-about-needs-overview',
  templateUrl: './think-about-needs-overview.component.html',
  styleUrls: ['./think-about-needs-overview.component.css']
})
export class ThinkAboutNeedsOverviewComponent {

  @Input() title='';
  constructor() { }


}
