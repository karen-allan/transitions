import {Component, Input, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-practitioner-overview',
  templateUrl: './about-practitioner-overview.component.html',
  styleUrls: ['./about-practitioner-overview.component.css']
})
export class AboutPractitionerOverviewComponent implements OnInit {

  @Input() title:string ='';
  @Input() quote:string='';
  @Input() author:string='';

  metaTitle = 'About Karen Allan | End of Life Supporter'
  metaDesc='Learn about End of Life Practitioner Karen Allan an advocate for End Of Life care for patients' +
      ' and caregivers in Shuswap, BC'

  constructor(private titleService: Title, private metaService: Meta) {
  }

  ngOnInit(): void {
   // alert("metatitle is" + this.metaTitle)
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
