import { Component } from '@angular/core';
import * as Constants from 'src/app/ts-files/constants'
import {PATH_OBJECTS} from "../../../ts-files/pathObjects";
import {PathObject} from "../../../ts-files/pathObject";
import {DataService} from "../../../service-files/data.service";

@Component({
  selector: 'app-consider-advance-care-plan-container',
  templateUrl: './consider-advance-care-plan-container.component.html',
  styleUrl: './consider-advance-care-plan-container.component.css'
})
export class ConsiderAdvanceCarePlanContainerComponent {

  menuItemId:number  = 1;
  subMenuItemId:number = 12;

  pathObjects = PATH_OBJECTS;
  pathObject: PathObject = PATH_OBJECTS[0];
  chosenParentId= 2;

  detailHeaderName="header-consider-care-plan"
  title= Constants.UNDERSTAND_ADVANCE_PLAN;
  quote: string='A person who does not plan long ahead will find trouble at their door.';
  author: string='Confucius';

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
