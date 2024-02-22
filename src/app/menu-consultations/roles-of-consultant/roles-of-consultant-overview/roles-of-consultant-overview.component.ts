import {Component, Input, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-roles-of-consultant-overview',
  templateUrl: './roles-of-consultant-overview.component.html',
  styleUrls: ['./roles-of-consultant-overview.component.css']
})
export class RolesOfConsultantOverviewComponent implements OnInit {

  @Input() title='';

  metaTitle = 'About End-of-Life Advocacy | End-of-life Doula Roles'
  metaDesc='Learn about the many varied roles end-of-life doulas play - from helping you create a formal care plan, to supporting ' +
      'caregivers, to sitting vigil at bedside'

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.metaTitle);
    this.metaService.addTags([
      {
        name: 'description',  content: this.metaDesc,
      },
      {name: 'robots', content: 'index, follow'},
      {name: "viewport", content: "width=device-width,initial-scale=1"}
    ]);
  }

}
