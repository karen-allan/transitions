import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-consider-your-rights-overview',
  templateUrl: './consider-your-rights-overview.component.html',
  styleUrl: './consider-your-rights-overview.component.css'
})
export class ConsiderYourRightsOverviewComponent {

  @Input() title='';
  @Input() quote='';
  @Input() author='';

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
