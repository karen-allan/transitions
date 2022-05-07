import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-consultation-overview',
  templateUrl: './book-consultation-overview.component.html',
  styleUrls: ['./book-consultation-overview.component.css']
})
export class BookConsultationOverviewComponent implements OnInit {

  @Input() title:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
