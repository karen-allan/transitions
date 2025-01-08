import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-check-off-tasks-list-overview',
  templateUrl: './check-off-tasks-list-overview.component.html',
  styleUrl: './check-off-tasks-list-overview.component.css'
})
export class CheckOffTasksListOverviewComponent {

  @Input() title:string='';
  @Input() quote:string='';
  @Input() author:string='';
  @Input() lookupParent:string='';
  @Input() lookupChild1:string='';
  @Input() lookupChild2:string='';
  @Input() lookupChild3:string='';

}
