import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-consider-advanced-care-plan-overview',
  templateUrl: './consider-advanced-care-plan-overview.component.html',
  styleUrl: './consider-advanced-care-plan-overview.component.css'
})
export class ConsiderAdvancedCarePlanOverviewComponent {

  @Input() title='';

}
