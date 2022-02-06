import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-doula-help-overview',
  templateUrl: './doula-help-overview.component.html',
  styleUrls: ['./doula-help-overview.component.css']
})
export class DoulaHelpOverviewComponent implements OnInit {

  @Input() title ='';

  constructor() { }

  ngOnInit(): void {
  }

}
