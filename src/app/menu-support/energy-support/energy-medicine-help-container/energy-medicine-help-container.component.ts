import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-medicine-help-container',
  templateUrl: './energy-medicine-help-container.component.html',
  styleUrls: ['./energy-medicine-help-container.component.css']
})
export class EnergyMedicineHelpContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 31;
  topicMenuItemId = 320;

  detailHeaderName = 'header-topic-energy-help-all'
  title='Energy Help for Everyone'
  detailListName = 'list-energy'

  constructor() { }

  ngOnInit(): void {
  }

}
