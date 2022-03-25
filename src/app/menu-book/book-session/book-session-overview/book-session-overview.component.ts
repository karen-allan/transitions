import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-session-overview',
  templateUrl: './book-session-overview.component.html',
  styleUrls: ['./book-session-overview.component.css']
})
export class BookSessionOverviewComponent implements OnInit {

  @Input() title:string ='';

  constructor() { }

  ngOnInit(): void {

  }

}
