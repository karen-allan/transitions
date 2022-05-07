import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-ahead-container',
  templateUrl: './plan-ahead-container.component.html',
  styleUrls: ['./plan-ahead-container.component.css']
})
export class PlanAheadContainerComponent implements OnInit {

  menuItemId:number  = 4;
  subMenuItemId:number = 40;

  detailHeaderName = 'header-plan-ahead'
  title='Planning Ahead Makes Sense'
  detailListName="list-doula-work"

  constructor() { }

  ngOnInit(): void {
  }

}
