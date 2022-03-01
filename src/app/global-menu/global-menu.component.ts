import { Component, Input, OnInit } from '@angular/core';
import {MENU_ITEMS} from "../ts-files/menuItems";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ]
})

export class GlobalMenuComponent implements OnInit {

  @Input() menuItemId: number = 0;
  @Input() subMenuItemId: number = 0;
  @Input() topicMenuItemId: number = 0;

  menuItems = MENU_ITEMS;

  show = false;

  constructor() {
  }

  get showMenu() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

}
