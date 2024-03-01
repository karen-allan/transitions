import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-consider-cpr-directive-overview',
  templateUrl: './consider-cpr-directive-overview.component.html',
  styleUrl: './consider-cpr-directive-overview.component.css'
})
export class ConsiderCprDirectiveOverviewComponent {

  @Input() title='';

}
