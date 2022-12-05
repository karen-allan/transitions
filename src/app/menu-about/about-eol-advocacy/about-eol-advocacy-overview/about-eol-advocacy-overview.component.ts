import {Component, Input, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-eol-advocacy-overview',
  templateUrl: './about-eol-advocacy-overview.component.html',
  styleUrls: ['./about-eol-advocacy-overview.component.css']
})
export class AboutEolAdvocacyOverviewComponent implements OnInit {

  @Input() title:string ='';
  @Input() subtitle:string ='';

  metaTitle = 'About End-of-Life Advocacy | End-of-life Doula Help'
  metaDesc='Learn why it is vital to prepare for your end long before it happens. Learn how end of life Doulas can help you by hearing your concerns and advocating for you'

  constructor(private titleService: Title, private metaService: Meta) {
  }

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

}
