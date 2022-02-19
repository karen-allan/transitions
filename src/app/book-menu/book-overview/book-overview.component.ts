import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.css']
})
export class BookOverviewComponent implements OnInit {

  @Input() subjectItemId: string ='';
  @Input() title:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
