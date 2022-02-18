import { Component, OnInit } from '@angular/core';
import {Element} from "../../../../../ts-files/element";
import {ELEMENTS} from "../../../../../ts-files/elements";
import {DatePipe} from "@angular/common";
import {DataService} from "../../../../../service-files/data.service";

@Component({
  selector: 'app-element-wheel',
  templateUrl: './element-wheel.component.html',
  styleUrls: ['./element-wheel.component.css']
})
export class ElementWheelComponent implements OnInit {

  detailListName="list-element"
  now:string | null='';
  currentTimeElement: Element = ELEMENTS[0];
  selectedElement: Element = ELEMENTS[0];
  elementSelected: string ='';

  constructor(private dataService: DataService, public datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getCurrentTime()
    this.getElementForCurrentTime()
    this.selectedElement = this.currentTimeElement;
  }

  /*********************************************************************************/
  getCurrentTime() {
    this.now = this.datePipe.transform(Date.now(), "h:mm")
    //alert(this.now)
  }

  /*********************************************************************************/
  getElementForCurrentTime(): Element {
    let currentHour = this.datePipe.transform(Date.now(), "H")
    this.dataService.getElementForCurrentHour(Number(currentHour))
        .subscribe(selEle => this.currentTimeElement = selEle)
    this.getTriggeredElementKey(this.currentTimeElement.id)
    return this.currentTimeElement;

  }

  /*********************************************************************************/
  getElement(id: number) {
    this.dataService.getSelectedElement(id)
        .subscribe(selElement => this.selectedElement = selElement);

    this.getTriggeredElementKey(this.selectedElement.id)
  }

  /*********************************************************************************/
  getTriggeredElementKey(id: number) {

    if (id == 1) {
      this.elementSelected = "triggeredWaterElement"
    }
    if (id == 2) {
      this.elementSelected = "triggeredWoodElement"
    }
    if (id == 3) {
      this.elementSelected = "triggeredFireElement"
    }
    if (id == 4) {
      this.elementSelected = "triggeredEarthElement"
    }
    if (id == 5) {
      this.elementSelected = "triggeredMetalElement"
    }


  }

}
