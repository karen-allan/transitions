import {Component, Input, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-testimonials-fees-overview',
  templateUrl: './testimonials-fees-overview.component.html',
  styleUrl: './testimonials-fees-overview.component.css'
})
export class TestimonialsFeesOverviewComponent  implements OnInit {

  @Input() title='';
  @Input() quote='';
  @Input() author='';

  metaTitle = 'Testimonials | Fees | End of Life Support'
  metaDesc='Read the testimonials from clients who have benefited from Karens compassion and skills.'

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    //alert("metatitle is" + this.metaTitle)
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
