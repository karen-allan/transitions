import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-medicine-help-overview',
  templateUrl: './energy-medicine-help-overview.component.html',
  styleUrls: ['./energy-medicine-help-overview.component.css']
})
export class EnergyMedicineHelpOverviewComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
