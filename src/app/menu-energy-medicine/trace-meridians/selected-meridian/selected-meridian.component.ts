import {Component, Input, OnInit} from '@angular/core';
import { Meridian} from "../../../ts-files/meridian";
import {MERIDIANS} from "../../../ts-files/meridians";
import {ELEMENTS} from "../../../ts-files/elements";
import {Element} from "../../../ts-files/element";
import {DataService} from "../../../service-files/data.service";

@Component({
  selector: 'app-selected-meridian',
  templateUrl: './selected-meridian.component.html',
  styleUrls: ['./selected-meridian.component.css']
})
export class SelectedMeridianComponent implements OnInit {

  @Input() title:string ='';
  @Input() selectedMeridian:Meridian = MERIDIANS[0];

  selectedElement:Element = ELEMENTS[0];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getSelectedElement(this.selectedMeridian.element_id)
  }

  getSelectedElement(id: number | undefined) {
    this.dataService.getSelectedElement(<number>id)
        .subscribe(selElement => this.selectedElement = selElement);
  }

}
