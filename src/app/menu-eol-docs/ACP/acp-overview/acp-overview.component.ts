import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-acp-overview',
  templateUrl: './acp-overview.component.html',
  styleUrls: ['./acp-overview.component.css']
})
export class AcpOverviewComponent implements OnInit {

  @Input() title:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
