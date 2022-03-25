import { Component, Input, OnInit } from '@angular/core';
import {MENU_ITEMS} from "../ts-files/menuItems";

import {
  trigger,
  state,
  style,
  animate,
  //query,
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

 /* toggle(x) {
    alert('am in myfuncito');

    x.classList.toggle("change");
    this.show = !this.show;
  }*/

  toggle() {
  //  alert('am in myfuncito');
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

}
