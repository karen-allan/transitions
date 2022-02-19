import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-consult-overview',
  templateUrl: './book-consult-overview.component.html',
  styleUrls: ['./book-consult-overview.component.css']
})
export class BookConsultOverviewComponent implements OnInit {

  @Input() title:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
