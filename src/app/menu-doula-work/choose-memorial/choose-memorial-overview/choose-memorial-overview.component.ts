import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-choose-memorial-overview',
  templateUrl: './choose-memorial-overview.component.html',
  styleUrls: ['./choose-memorial-overview.component.css']
})
export class ChooseMemorialOverviewComponent implements OnInit {

  @Input() title ='';

  constructor() { }

  ngOnInit(): void {
  }

}
