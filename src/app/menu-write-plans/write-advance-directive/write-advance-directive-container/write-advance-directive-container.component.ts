import {Component, OnInit} from '@angular/core';
import {AdvanceDirective} from "../../../ts-files/advance_directive";
import * as Constants from 'src/app/ts-files/constants'
import {PATH_OBJECTS} from "../../../ts-files/pathObjects";
import {DataService} from "../../../service-files/data.service";
import {PathObject} from "../../../ts-files/pathObject";

@Component({
  selector: 'app-write-advance-directive-container',
  templateUrl: './write-advance-directive-container.component.html',
  styleUrl: './write-advance-directive-container.component.css'
})
export class WriteAdvanceDirectiveContainerComponent implements OnInit {

  menuItemId:number  = 2;
  subMenuItemId:number = 22;

  pathObjects = PATH_OBJECTS;
  pathObject: PathObject = PATH_OBJECTS[0];
  chosenParentId= 1;

  title=Constants.WRITE_ADVANCE_CARE_PLAN
  quote: string='The scariest moment is always just before you start.';
  author: string='Stephen King';
  today = new Date();

  directive:AdvanceDirective;

  constructor(private dataService: DataService) {

    //check box items are true false booleans while radio button items are yes and no constants
    //type in new Name ( then space bar and comma, right click and show context actions then Generate Argument stubs
    this.directive = new AdvanceDirective( "","","","", 'B.C.', "",
        "", "", "", "", "", "", "",
        "", "", "", "", "", "", "",
        "", "", false, false, false, "", "",
        "", false, false, false, false, false, false, false,
        false, false, false, false, false, "")
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
