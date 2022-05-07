import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reduce-anxiety-overview',
  templateUrl: './reduce-anxiety-overview.component.html',
  styleUrls: ['./reduce-anxiety-overview.component.css']
})
export class ReduceAnxietyOverviewComponent implements OnInit {

  @Input() title ='';

  constructor() { }

  ngOnInit(): void {
  }

}
