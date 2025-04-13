import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/ts-files/constants'
import {PATH_OBJECTS} from "../../../ts-files/pathObjects";
import {PathObject} from "../../../ts-files/pathObject";
import {DataService} from "../../../service-files/data.service";

@Component({
  selector: 'app-think-about-needs-container',
  templateUrl: './think-about-needs-container.component.html',
  styleUrls: ['./think-about-needs-container.component.css']
})
export class ThinkAboutNeedsContainerComponent  implements OnInit {

  menuItemId:number  = 1;
  subMenuItemId:number = 10;

  pathObjects = PATH_OBJECTS;
  pathObject: PathObject = PATH_OBJECTS[0];
  chosenParentId= 2;

  title=Constants.THINK_ABOUT_YOUR_NEEDS
  quote: string='Someone\'s sitting in the shade today because someone planted a tree long ago.';
  author: string='Warren Buffett';

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
