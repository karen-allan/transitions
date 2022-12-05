import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../ts-files/client";
import {BookConsultationContainerComponent} from "../book-consultation-container/book-consultation-container.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-book-consultation-overview',
  templateUrl: './book-consultation-overview.component.html',
  styleUrls: ['./book-consultation-overview.component.css']
})
export class BookConsultationOverviewComponent implements OnInit {

  @Input() client: Client;
  @Input() title:string ='';

  metaTitle = 'Book a Consultation | End of Life Support | Care Planning'
  metaDesc='Book a consultation from End of Life doula Karen Allan in person or via Zoom to learn how you can support yourself or your' +
      ' loved ones about end of life issues';

  constructor(private _bookConsultationContainerComponent: BookConsultationContainerComponent, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.metaTitle);
    this.metaService.addTags([
      {
        name: 'description',
        content: this.metaDesc,
      },
      {name: 'robots', content: 'index, follow'},
      {name: "viewport", content: "width=device-width,initial-scale=1"}
    ]);
  }

  getParentComponent(): BookConsultationContainerComponent {
    return this._bookConsultationContainerComponent;
  }
}
