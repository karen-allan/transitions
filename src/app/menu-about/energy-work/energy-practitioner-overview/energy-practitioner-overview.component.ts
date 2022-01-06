import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-practitioner-overview',
  templateUrl: './energy-practitioner-overview.component.html',
  styleUrls: ['./energy-practitioner-overview.component.css']
})
export class EnergyPractitionerOverviewComponent implements OnInit {

  @Input() title:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
