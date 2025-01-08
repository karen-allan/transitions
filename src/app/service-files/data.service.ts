import {EventEmitter, Injectable} from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';
import {SUB_MENU_ITEMS} from "../ts-files/subMenuItems";
import {SubMenuItem} from "../ts-files/subMenuItem";

import {Question} from "../ts-files/question";
import {QUESTIONS} from "../ts-files/questions";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  selectedQuestion = Question;

  invokeFirstComponentFunction=new EventEmitter();
  subsVar:Subscription

  constructor() { }

  onFirstComponentButtonClick(name:string) {
    this.invokeFirstComponentFunction.emit(name);
  }

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


  // ******************** GET QUESTION *************************
  getQuestion(id: number): Observable<Question> {
    var foundQuestion = QUESTIONS[0];

    for (var quest of QUESTIONS) {
      if ((quest.question_num == id) ) {
        foundQuestion = quest;
      }
    }

    return of(foundQuestion);
  }


}
