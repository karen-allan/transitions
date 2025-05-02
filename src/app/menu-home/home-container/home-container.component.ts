import { Component, OnInit } from '@angular/core';
import {FactObject} from "../../ts-files/fact";
import {FACTS} from "../../ts-files/facts";
import {DataService} from "../../service-files/data.service";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  menuItemId:number = 0
  subMenuItemId = 1



  title='Facing The Facts'
  quote: string='Unable are the loved to die, for love is immortality.';
  author: string='Emily Dickinson';

  constructor() { }

  ngOnInit(): void {

  }


}
