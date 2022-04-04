import { Component, Input, OnInit } from '@angular/core';
import {MENU_ITEMS} from "../ts-files/menuItems";
import {SUB_MENU_ITEMS} from "../ts-files/subMenuItems";

import {
  trigger,
  state,
  style,
  animate,
  // query,
  transition
} from '@angular/animations';
import {DataService} from "../service-files/data.service";

@Component({
  selector: 'app-global-menu',
  templateUrl: './global-menu.component.html',
  styleUrls: ['./global-menu.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        height: '*'
      })),
      state('hide',   style({
        height: 0
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-in'))
    ]),
    trigger('rotatedState', [
        state('default', style({
          transform: 'rotate(0)'})),
        state('rotated', style({
          transform: 'rotate(-135deg)'})),
        transition('rotated => default', animate('300ms ease-out')),
        transition('default => rotated', animate('300ms ease-in'))
      ])
  ]
})

export class GlobalMenuComponent implements OnInit {

  @Input() menuItemId: number = 0;
  @Input() subMenuItemId: number = 0;

  menuItems = MENU_ITEMS;
  subMenuItems = SUB_MENU_ITEMS;

  show:boolean = false;

  constructor(private dataService: DataService) {
  }

  get showMenu() {
    return this.show ? 'show' : 'hide'
  }

  get rotated() {
    return this.show ? 'rotated' : 'default'
  }

  toggle() {
    this.show = !this.show;
   // alert('show is ' + this.show)
  }

  ngOnInit(): void {
    this.getSubMenuItems();
  }

  /***************************************************************************************/
  getSubMenuItems(): void {
    this.dataService.getSubMenuItems(this.menuItemId)
        .subscribe(itemList => this.subMenuItems = itemList);

  }

}
