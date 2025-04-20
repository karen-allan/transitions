import {Component, Input} from '@angular/core';
import {PathObject} from "../../../ts-files/pathObject";
import {Meta, Title} from "@angular/platform-browser";


@Component({
  selector: 'app-consider-your-rights-overview',
  templateUrl: './consider-your-rights-overview.component.html',
  styleUrl: './consider-your-rights-overview.component.css'
})
export class ConsiderYourRightsOverviewComponent {

  @Input() title='';
  @Input() quote='';
  @Input() author='';
  @Input() pathObject:PathObject;

  sectionSelected: string ='';

  metaTitle='Know your Rights | DNRs | No CPR'

  /* less than 160 */
  metaDesc='Learn about all the rights you have regarding your or your family members end of life care decisions.'

  constructor(private titleService: Title, private metaService:Meta) { }

  /*********************************************************************************/
  ngOnInit(): void {
  //  alert("metatitle is" + this.metaTitle)
    this.titleService.setTitle(this.metaTitle);
    this.metaService.addTags([
      {name: 'description', content: this.metaDesc},
      {name: 'robots', content: 'index, follow'},
      {name:"viewport", content:"width=device-width,initial-scale=1" }
    ]);
  }

  /*********************************************************************************/
  getTriggeredPromptKey(id: number) {

    if (id ==0) {
      this.sectionSelected = '';
    }
    if (id == 1) {
      this.sectionSelected = "triggeredSection1"
    }
    if (id == 2) {
      this.sectionSelected = "triggeredSection2"
    }
    if (id == 3) {
      this.sectionSelected = "triggeredSection3"
    }
    if (id == 4) {
      this.sectionSelected = "triggeredSection4"
    }
  }
}
