import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-energy-help-overview',
  templateUrl: './energy-help-overview.component.html',
  styleUrls: ['./energy-help-overview.component.css']
})
export class EnergyHelpOverviewComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
