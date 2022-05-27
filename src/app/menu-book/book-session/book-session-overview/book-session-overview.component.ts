import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../ts-files/client";


@Component({
  selector: 'app-book-session-overview',
  templateUrl: './book-session-overview.component.html',
  styleUrls: ['./book-session-overview.component.css']
})
export class BookSessionOverviewComponent implements OnInit {

  @Input() title:string ='';
  @Input() model: Client;
 /* total:number=0;
  @Output() totalString:string='';*/

  constructor() { }

  ngOnInit(): void {
  }


}
