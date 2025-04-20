import {Component, Input, OnInit} from '@angular/core';
import {PathObject} from "../../../ts-files/pathObject";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-consider-advance-care-plan-overview',
  templateUrl: './consider-advance-care-plan-overview.component.html',
  styleUrl: './consider-advance-care-plan-overview.component.css'
})
export class ConsiderAdvanceCarePlanOverviewComponent implements OnInit {

  @Input() title='';
  @Input() quote='';
  @Input() author='';

  @Input() pathObject:PathObject;

  /* less than 60 */
  metaTitle='Make an Advance Care Plan | Medical Interventions'

  /* less than 160 */
  metaDesc='Create your own advance care plan by running our wizard. ' +
      'For BC residents only. Easy and free way to let your plans be known.'

  sectionSelected: string ='';

  constructor(private titleService: Title, private metaService:Meta) { }

  /*********************************************************************************/
  ngOnInit(): void {
    //alert("metatitle is" + this.metaTitle)
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
