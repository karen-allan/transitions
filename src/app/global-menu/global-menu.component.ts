import { Component, Input, OnInit } from '@angular/core';
import {MENU_ITEMS} from "../ts-files/menuItems";

@Component({
  selector: 'app-global-menu',
  templateUrl: './global-menu.component.html',
  styleUrls: ['./global-menu.component.css']
})

export class GlobalMenuComponent implements OnInit {

  @Input() menuItemId: number = 0;
  @Input() subMenuItemId: number = 0;
  @Input() topicMenuItemId: number = 0;

  menuItems = MENU_ITEMS;

  mobileMenuDisplay = 'displayNone';

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    if (this.mobileMenuDisplay == 'displayNone') {
      this.mobileMenuDisplay = 'displayBlock';
      // alert(this.mobileMenuDisplay);
    }
    else {
      this.mobileMenuDisplay = 'displayNone';
      // alert(this.mobileMenuDisplay);
    }
  }

}
