import {Component, Input} from '@angular/core';
import {PathObject} from "../../../ts-files/pathObject";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-consider-advocates-overview',
  templateUrl: './consider-advocates-overview.component.html',
  styleUrl: './consider-advocates-overview.component.css'
})

export class ConsiderAdvocatesOverviewComponent  {

  @Input() title:string='';
  @Input() quote='';
  @Input() author='';

  sectionSelected: string ='';

  @Input() pathObject: PathObject;

  metaTitle='Your Advocates for Care | Representatives'

  /* less than 160 */
  metaDesc='Be proactive and use our free wizard to assign the person you most trust to care for you should you be in a medical emergency' +
      ' or critical condition.'

  constructor(private titleService: Title, private metaService:Meta) { }

  /*********************************************************************************/
  ngOnInit(): void {
 //   alert("metatitle is" + this.metaTitle)
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
