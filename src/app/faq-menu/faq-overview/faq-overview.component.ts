import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-faq-overview',
  templateUrl: './faq-overview.component.html',
  styleUrls: ['./faq-overview.component.css']
})
export class FaqOverviewComponent implements OnInit {

  @Input() title:string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
