import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-consider-advance-care-plan-overview',
  templateUrl: './consider-advance-care-plan-overview.component.html',
  styleUrl: './consider-advance-care-plan-overview.component.css'
})
export class ConsiderAdvanceCarePlanOverviewComponent {

  @Input() title='';

}
