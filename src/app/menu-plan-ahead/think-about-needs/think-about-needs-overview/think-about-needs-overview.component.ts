import {Component, Input} from '@angular/core';
import {PathObject} from "../../../ts-files/pathObject";


@Component({
  selector: 'app-think-about-needs-overview',
  templateUrl: './think-about-needs-overview.component.html',
  styleUrls: ['./think-about-needs-overview.component.css']
})
export class ThinkAboutNeedsOverviewComponent {

  @Input() title='';
  @Input() quote='';
  @Input() author='';

  @Input() pathObject: PathObject;

  constructor() { }


}
