import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-energy-exercises-container',
  templateUrl: './do-energy-exercises-container.component.html',
  styleUrls: ['./do-energy-exercises-container.component.css']
})
export class DoEnergyExercisesContainerComponent implements OnInit {

  menuItemId:number = 3;
  subMenuItemId:number = 33;

  detailHeaderName = 'header-do-energy-exercises'
  title='Move the Energy inside you'
  detailListName="list-energy-medicine"

  constructor() { }

  ngOnInit(): void {
  }

}
