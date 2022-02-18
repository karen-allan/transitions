import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {SUB_MENU_ITEMS} from "../ts-files/subMenuItems";
import {TOPIC_MENU_ITEMS} from "../ts-files/topicMenuItems";
import {SubMenuItem} from "../ts-files/subMenuItem";
import {Subject} from "../ts-files/subject";
import {SUBJECTS} from "../ts-files/subjects";
import {DerExercise} from "../ts-files/derExercise";
import {DER_EXERCISES} from "../ts-files/derExercises";
import {ELEMENTS} from "../ts-files/elements";
import {Element} from "../ts-files/element";
import {MERIDIANS} from "../ts-files/meridians";
import {Meridian} from "../ts-files/meridian";

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

  // ******************** GET SUB SUB (TOPIC) MENU ITEMS *************************

  getTopicMenuItems(parentId: number): Observable<SubMenuItem[]> {
    var topicMenuItems=[];
    for (var item of TOPIC_MENU_ITEMS) {
      if ((item.parent_id == parentId) ) {
        topicMenuItems.push(item);
      }
    }
    return of(topicMenuItems)
  }

  // ******************** GET SUBJECTS *************************

  getSelectedSubjects(id1: number, id2: number): Observable<Subject[]> {
    var subjectList=[];
    for (var subject of SUBJECTS) {
      if ((subject.id >= id1) && (subject.id <= id2)) {
        subjectList.push(subject);
      }
    }
    return of(subjectList)
  }

  // ******************** GET EXERCISES *************************
  getExercises(): Observable<DerExercise[]> {
    return of(DER_EXERCISES);
  }

  // ******************** GET EXERCISE *************************
  getExercise(id: number): Observable<DerExercise> {
      var foundExercise = DER_EXERCISES[0];

      for (var exercise of DER_EXERCISES) {
        if ((exercise.id == id) ) {
          foundExercise = exercise;
        }
      }

      return of(foundExercise);
  }

  // ******************** GET ELEMENT FOR CURRENT HOUR *************************
  // @ts-ignore
  getElementForCurrentHour(hour: number): Observable<Element> {
    for (var element of ELEMENTS) {
      // We need to do 2 checks here
      // - If the current hour is in the start_hour/end_hour range
      // - If the current hour is in the start_hour_2/end_hour_2 range
      // Check for current hour is in the start_hour/end_hour range first
      if (element.end_hour < element.start_hour) {
        // The meridian's timeframe spans midnight
        // Need to check 2 conditions:
        // - start hour to midnight
        // - zero hour (midnight) to end_hour
        if ((element.start_hour <= hour) && (hour <= 24)) {
          // Hour between start hour and midnight
          return of(element)
        }
        if ((hour >= 0) && (hour < element.end_hour)) {
          // Hour between midnight and end_hour
          return of(element)
        }
      } else {
        // The meridian's timeframe has a normal time span - start hour is less than end hour
        if ((element.start_hour <= hour) && (element.end_hour > hour)) {
          //alert("selected meridian hour is " + meridian.name)
          return of(element)
        }
      }
      // If we get this far now we have to check start_hour_2/end_hour_2 range
      // @ts-ignore
      if (element.end_hour_2 < element.start_hour_2) {
        // The meridian's timeframe spans midnight
        // Need to check 2 conditions:
        // - start hour to midnight
        // - zero hour (midnight) to end_hour
        // @ts-ignore
        if ((element.start_hour_2 <= hour) && (hour <= 24)) {
          // Hour between start hour and midnight
          return of(element)
        }
        // @ts-ignore
        if ((hour >= 0) && (hour < element.end_hour_2)) {
          // Hour between midnight and end_hour
          return of(element)
        }
      } else {
        // The meridian's timeframe has a normal time span - start hour is less than end hour
        // @ts-ignore
        if ((element.start_hour_2 <= hour) && (element.end_hour_2 > hour)) {
          //alert("selected meridian hour is " + meridian.name)
          return of(element)
        }
      }
    }

  }

  // ******************** GET SELECTED ELEMENT *************************
  getSelectedElement(id: number): Observable<Element> {

    // @ts-ignore
    return of(ELEMENTS.find(elem => elem.id === id));
  }

  // ******************** GET MERIDIANS *************************
  getMeridians(): Observable<Meridian[]> {
    return of(MERIDIANS);
  }

  // ******************** GET SELECTED MERIDIAN *************************
  getSelectedMeridian(id: number): Observable<Meridian> {
    // @ts-ignore
    return of(MERIDIANS.find(mer => mer.id == id));
  }

  // ******************** TRACE MERIDIAN CYCLE *************************
  traceMeridianCycleStartAt(id: number): Observable<Meridian> {
    // @ts-ignore
    return of(MERIDIANS.find(meridian => meridian.id === id));
  }

  // ******************** GET CURRENT MERIDIAN  *************************
  // @ts-ignore
  getMeridianForCurrentHour(hour: number): Observable<Meridian> {
    for (var meridian of MERIDIANS) {
      // @ts-ignore
      if (meridian.end_hour < meridian.start_hour) {
        // The meridian's timeframe spans midnight
        // Need to check 2 conditions:
        // - start hour to midnight
        // - zero hour (midnight) to end_hour
        // @ts-ignore
        if ((meridian.start_hour <= hour) && (hour <= 24)) {
          // Hour between start hour and midnight
          return of(meridian)
        }
        // @ts-ignore
        if ((hour >= 0) && (hour < meridian.end_hour)) {
          // Hour between midnight and end_hour
          return of(meridian)
        }
      } else {
        // The meridian's timeframe has a normal time span - start hour is less than end hour
        // @ts-ignore
        if ((meridian.start_hour <= hour) && (meridian.end_hour > hour)) {
          //alert("selected meridian hour is " + meridian.name)
          return of(meridian)
        }
      }
    }
  }
}
