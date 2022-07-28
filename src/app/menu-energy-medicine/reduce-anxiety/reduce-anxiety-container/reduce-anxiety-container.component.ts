import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduce-anxiety-container',
  templateUrl: './reduce-anxiety-container.component.html',
  styleUrls: ['./reduce-anxiety-container.component.css']
})
export class ReduceAnxietyContainerComponent implements OnInit {

  menuItemId:number  = 2;
  subMenuItemId:number = 20;

  detailHeaderName = 'header-energy-anxiety'
  title='Reduce Your Anxiety'


  constructor() { }

  ngOnInit(): void {
  }

}
