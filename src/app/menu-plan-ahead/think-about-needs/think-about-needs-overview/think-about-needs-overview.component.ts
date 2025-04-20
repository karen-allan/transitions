import {Component, Input} from '@angular/core';
import {PathObject} from "../../../ts-files/pathObject";
import {Meta, Title} from "@angular/platform-browser";


@Component({
  selector: 'app-think-about-needs-overview',
  templateUrl: './think-about-needs-overview.component.html',
  styleUrls: ['./think-about-needs-overview.component.css']
})
export class ThinkAboutNeedsOverviewComponent {

  @Input() title='';
  @Input() quote='';
  @Input() author='';

  @Input() pathObject: PathObject;

  metaTitle='End of Life Concerns and Wishes'

  /* less than 160 */
  metaDesc='Think about what you would want at the end of your life and plan for it instead of leaving it all to chance.'

  constructor(private titleService: Title, private metaService:Meta) { }

  /*********************************************************************************/
  ngOnInit(): void {
   // alert("metatitle is" + this.metaTitle)
    this.titleService.setTitle(this.metaTitle);
    this.metaService.addTags([
      {name: 'description', content: this.metaDesc},
      {name: 'robots', content: 'index, follow'},
      {name:"viewport", content:"width=device-width,initial-scale=1" }
    ]);
  }

}
