import {Component, Input} from '@angular/core';
import {PathObject} from "../../../ts-files/pathObject";

@Component({
  selector: 'app-check-off-tasks-list-overview',
  templateUrl: './check-off-tasks-list-overview.component.html',
  styleUrl: './check-off-tasks-list-overview.component.css'
})
export class CheckOffTasksListOverviewComponent {

  @Input() title:string='';
  @Input() quote:string='';
  @Input() author:string='';

  @Input() pathObject: PathObject;

}
