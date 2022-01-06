import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-global-headers',
  templateUrl: './global-headers.component.html',
  styleUrls: ['./global-headers.component.css']
})
export class GlobalHeadersComponent implements OnInit {

  @Input() detailHeaderName: string;
  @Input() title: string;

  constructor() {
    this.detailHeaderName='';
    this.title='';
  }

  ngOnInit(): void {
  }

}
