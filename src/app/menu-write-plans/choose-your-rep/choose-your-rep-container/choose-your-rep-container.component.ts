import { Component, OnInit } from '@angular/core';
import {RepNine} from "../../../ts-files/rep-nine";
import * as Constants from 'src/app/ts-files/constants'
import {PATH_OBJECTS} from "../../../ts-files/pathObjects";
import {PathObject} from "../../../ts-files/pathObject";
import {DataService} from "../../../service-files/data.service";


@Component({
  selector: 'app-choose-your-rep-container',
  templateUrl: './choose-your-rep-container.component.html',
  styleUrls: ['./choose-your-rep-container.component.css']
})
export class ChooseYourRepContainerComponent implements OnInit {

  menuItemId:number  = 2;
  subMenuItemId:number = 21;

  pathObjects = PATH_OBJECTS;
  pathObject: PathObject = PATH_OBJECTS[0];
  chosenParentId= 1;

  title= Constants.CHOOSE_YOUR_REPS
  quote: string='When the world is silent, even one voice becomes powerful.';
  author: string='Malala Yousafzai';

  rep:RepNine;

  /* To append a field, put a comma at end, then space, the '' it will place next field */
  constructor(private dataService: DataService) {

    //type in new Name ( then space bar and comma, right click and show context actions then Generate Argument stubs
    this.rep = new RepNine("", "", "", "", "British Columbia",
        "", "", "", "", "", "", '',
        "", "", "", "", '', "",
        "", "", "", "", "", "", "",
        "", "", "", "", "");
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
