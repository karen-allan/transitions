import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MERIDIANS } from '../ts-files/meridians';
import {SUB_MENU_ITEMS} from "../ts-files/subMenuItems";
import {SubMenuItem} from "../ts-files/subMenuItem";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // ******************** GET SUB MENU ITEMS *************************

  getSubMenuItems(parentId: number): Observable<SubMenuItem[]> {
    var subMenuItems=[];
    for (var item of SUB_MENU_ITEMS) {
      if ((item.parent_id == parentId) ) {
        subMenuItems.push(item);
      }
    }
    return of(subMenuItems)
  }
}
