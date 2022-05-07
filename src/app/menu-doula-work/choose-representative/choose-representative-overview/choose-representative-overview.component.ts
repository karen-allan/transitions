import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-choose-representative-overview',
  templateUrl: './choose-representative-overview.component.html',
  styleUrls: ['./choose-representative-overview.component.css']
})
export class ChooseRepresentativeOverviewComponent implements OnInit {

 @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
