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
    ]),
    trigger('rotatedState', [
        state('default', style({ transform: 'rotate(0)' })),
        state('rotated', style({ transform: 'rotate(-135deg)' })),
        transition('rotated => default', animate('400ms ease-out')),
        transition('default => rotated', animate('400ms ease-in'))
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

  get rotated() {
    return this.show ? 'rotated' : 'default'
  }

  toggle() {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

}
