import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import {Client} from "../../../ts-files/client";
import {BookConsultationContainerComponent} from "../book-consultation-container/book-consultation-container.component";

@Component({
  selector: 'app-book-consultation-overview',
  templateUrl: './book-consultation-overview.component.html',
  styleUrls: ['./book-consultation-overview.component.css']
})
export class BookConsultationOverviewComponent implements OnInit {

  @Input() model: Client;
  @Input() title:string ='';

  constructor(private _bookConsultationContainerComponent: BookConsultationContainerComponent) { }

  ngOnInit(): void {
  }

  getParentComponent(): BookConsultationContainerComponent {
    return this._bookConsultationContainerComponent;
  }
}
