import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-overview',
  templateUrl: './home-overview.component.html',
  styleUrls: ['./home-overview.component.css']
})
export class HomeOverviewComponent implements OnInit {

  @Input() detailListName:string = '';
   @Input() title:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
