import {Component, Input, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-practitioner-overview',
  templateUrl: './about-practitioner-overview.component.html',
  styleUrls: ['./about-practitioner-overview.component.css']
})
export class AboutPractitionerOverviewComponent implements OnInit {

  @Input() title:string ='';


  metaTitle = 'About End of Life Doulas | Vancouver Based Doula Karen Allan'
  metaDesc='Learn about End of Life Doula Practitioner Karen Allan and why she became an advocate for End Of Life care for both patients' +
      ' and caregivers in Vancouver, BC'

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
