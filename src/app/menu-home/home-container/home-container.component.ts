import { Component, OnInit } from '@angular/core';
import * as Constants from "../../ts-files/constants";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  menuItemId:number = 0
  subMenuItemId = 1

  title='Facing our Mortality'
  quote: string='Unable are the loved to die, for love is immortality.';
  author: string='Emily Dickinson';

 //
  //slogan='knowledge is power'

  constructor() { }

  ngOnInit(): void {
  }

}
