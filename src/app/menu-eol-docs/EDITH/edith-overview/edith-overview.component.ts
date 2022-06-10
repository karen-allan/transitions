import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edith-overview',
  templateUrl: './edith-overview.component.html',
  styleUrls: ['./edith-overview.component.css']
})
export class EdithOverviewComponent implements OnInit {

  @Input() title:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
