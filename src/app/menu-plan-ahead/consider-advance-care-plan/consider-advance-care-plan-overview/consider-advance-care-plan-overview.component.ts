import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-consider-advance-care-plan-overview',
  templateUrl: './consider-advance-care-plan-overview.component.html',
  styleUrl: './consider-advance-care-plan-overview.component.css'
})
export class ConsiderAdvanceCarePlanOverviewComponent {

  @Input() title='';
  sectionSelected: string ='';

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
