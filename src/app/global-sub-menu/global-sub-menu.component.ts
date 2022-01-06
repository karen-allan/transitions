import {Component, Input, OnInit} from '@angular/core';
import {SUB_MENU_ITEMS} from "../ts-files/subMenuItems";
import {DataService} from "../service-files/data.service";

@Component({
  selector: 'app-global-sub-menu',
  templateUrl: './global-sub-menu.component.html',
  styleUrls: ['./global-sub-menu.component.css']
})
export class GlobalSubMenuComponent implements OnInit {

  @Input() menuItemId: number = 0;
  @Input() subMenuItemId: number = 0;

  subMenuItems = SUB_MENU_ITEMS;

  constructor(private dataService: DataService) {
  }

  /***************************************************************************************/
  ngOnInit(): void {
    this.getSubMenuItems();
  }

  /***************************************************************************************/
  getSubMenuItems(): void {
    this.dataService.getSubMenuItems(this.menuItemId)
      .subscribe(itemList => this.subMenuItems = itemList);
  }


}
