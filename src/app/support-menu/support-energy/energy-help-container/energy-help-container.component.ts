import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-help-container',
  templateUrl: './energy-help-container.component.html',
  styleUrls: ['./energy-help-container.component.css']
})
export class EnergyHelpContainerComponent implements OnInit {

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
