import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-consider-edith-directive-overview',
  templateUrl: './consider-edith-directive-overview.component.html',
  styleUrl: './consider-edith-directive-overview.component.css'
})
export class ConsiderEdithDirectiveOverviewComponent {

  @Input() title='';

}
