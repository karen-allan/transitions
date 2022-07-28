import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-energy-exercises-container',
  templateUrl: './do-energy-exercises-container.component.html',
  styleUrls: ['./do-energy-exercises-container.component.css']
})
export class DoEnergyExercisesContainerComponent implements OnInit {

  menuItemId:number = 2;
  subMenuItemId:number = 23;

  detailHeaderName = 'header-energy-der'
  title='Move the Energy inside you'


  constructor() { }

  ngOnInit(): void {
  }

}
