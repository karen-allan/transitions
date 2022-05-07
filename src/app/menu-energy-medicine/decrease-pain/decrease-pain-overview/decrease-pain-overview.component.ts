import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-decrease-pain-overview',
  templateUrl: './decrease-pain-overview.component.html',
  styleUrls: ['./decrease-pain-overview.component.css']
})
export class DecreasePainOverviewComponent implements OnInit {

  @Input() title='';

  constructor() { }

  ngOnInit(): void {
  }

}
