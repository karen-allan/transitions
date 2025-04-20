import {Component, Input} from '@angular/core';
import {PathObject} from "../../../ts-files/pathObject";
import {Meta, Title} from "@angular/platform-browser";

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

  /* less than 60 */
  metaTitle='Preparing for End of Life | Documents to Save'

  /* less than 160 */
  metaDesc='Follow our task list to ensure you have all the papers, like wills and advance care plans, representative section 9' +
      ' completed and safely stored.'

  constructor(private titleService: Title, private metaService:Meta) { }

  /*********************************************************************************/
  ngOnInit(): void {
   // alert("metatitle is" + this.metaTitle)
    this.titleService.setTitle(this.metaTitle);
    this.metaService.addTags([
      {name: 'description', content: this.metaDesc},
      {name: 'robots', content: 'index, follow'},
      {name:"viewport", content:"width=device-width,initial-scale=1" }
    ]);
  }
}
