import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduce-anxiety-container',
  templateUrl: './reduce-anxiety-container.component.html',
  styleUrls: ['./reduce-anxiety-container.component.css']
})
export class ReduceAnxietyContainerComponent implements OnInit {

  menuItemId:number  = 3;
  subMenuItemId:number = 30;

  detailHeaderName = 'header-reduce-anxiety'
  title='Reduce Your Anxiety'
  detailListName="list-energy-medicine"

  constructor() { }

  ngOnInit(): void {
  }

}
