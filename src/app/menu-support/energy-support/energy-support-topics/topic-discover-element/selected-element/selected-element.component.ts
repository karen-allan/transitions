import {Component, Input, OnInit} from '@angular/core';
import {Element} from "../../../../../ts-files/element";
import {ELEMENTS} from "../../../../../ts-files/elements";

@Component({
  selector: 'app-selected-element',
  templateUrl: './selected-element.component.html',
  styleUrls: ['./selected-element.component.css']
})
export class SelectedElementComponent implements OnInit {

  @Input() title:string ='';
  @Input() selectedElement:Element = ELEMENTS[0];
  @Input()elementSelected: string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
