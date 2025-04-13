import { Component } from '@angular/core';
import * as Constants from 'src/app/ts-files/constants'
import {DataService} from "../../../service-files/data.service";
import {PATH_OBJECTS} from "../../../ts-files/pathObjects";
import {PathObject} from "../../../ts-files/pathObject";

@Component({
  selector: 'app-check-off-tasks-list-container',
  templateUrl: './check-off-tasks-list-container.component.html',
  styleUrl: './check-off-tasks-list-container.component.css'
})
export class CheckOffTasksListContainerComponent {

  menuItemId:number  = 2;
  subMenuItemId:number = 23;

  pathObjects = PATH_OBJECTS;
  pathObject: PathObject = PATH_OBJECTS[0];
  chosenParentId= 3;

  title= Constants.CREATE_YOUR_CHECK_LIST
  quote:string='At any time, you have the power to say: this is not how the story is going to end.';
  author:string='Christine Mason Miller';

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getLookupPathObject(this.chosenParentId)
  }

  getLookupPathObject(id:number): void {
    for (var pathObj of this.pathObjects) {
      this.dataService.getLookupPathObjectById(id)
          .subscribe(itemList => this.pathObject = itemList);
    }
  }
}
