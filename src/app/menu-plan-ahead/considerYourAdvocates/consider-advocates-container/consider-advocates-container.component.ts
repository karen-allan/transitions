import {Component, OnInit} from '@angular/core';
import * as Constants from 'src/app/ts-files/constants'
import {PATH_OBJECTS} from "../../../ts-files/pathObjects";
import {PathObject} from "../../../ts-files/pathObject";
import {DataService} from "../../../service-files/data.service";

@Component({
  selector: 'app-consider-advocates-container',
  templateUrl: './consider-advocates-container.component.html',
  styleUrl: './consider-advocates-container.component.css'
})
export class ConsiderAdvocatesContainerComponent implements OnInit {

  menuItemId:number  = 1;
  subMenuItemId:number = 11;

  pathObjects = PATH_OBJECTS;
  pathObject: PathObject = PATH_OBJECTS[0];
  chosenParentId= 2;

  detailHeaderName="header-consider-reps"
  title=Constants.CONSIDER_YOUR_ADVOCATES

  quote: string='Ask for help not because you are weak, but because you want to remain strong.';
  author: string='Les Brown';

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
