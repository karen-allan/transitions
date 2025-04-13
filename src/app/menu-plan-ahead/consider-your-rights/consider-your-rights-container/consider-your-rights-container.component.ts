import { Component } from '@angular/core';
import * as Constants from "../../../ts-files/constants";
import {PATH_OBJECTS} from "../../../ts-files/pathObjects";
import {PathObject} from "../../../ts-files/pathObject";
import {DataService} from "../../../service-files/data.service";


@Component({
  selector: 'app-consider-your-rights-container',
  templateUrl: './consider-your-rights-container.component.html',
  styleUrl: './consider-your-rights-container.component.css'
})

export class ConsiderYourRightsContainerComponent {
  menuItemId:number  = 1;
  subMenuItemId:number = 13;

  pathObjects = PATH_OBJECTS;
  pathObject: PathObject = PATH_OBJECTS[0];
  chosenParentId= 2;

  detailHeaderName="header-consider-cpr"
  title=Constants.KNOW_YOUR_RIGHTS
  quote: string='Planning is bringing the future into the present to do something about it now.';
  author: string='Alan Lakein';

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
