import {Component, Input, OnInit} from '@angular/core';
import {TOPIC_MENU_ITEMS} from "../ts-files/topicMenuItems";
import {DataService} from "../service-files/data.service";


@Component({
  selector: 'app-global-topic-menu',
  templateUrl: './global-topic-menu.component.html',
  styleUrls: ['./global-topic-menu.component.css']
})
export class GlobalTopicMenuComponent implements OnInit {

  @Input() menuItemId: number = 0;
  @Input() subMenuItemId: number = 0;
  @Input() topicMenuItemId: number =0;

  topicMenuItems = TOPIC_MENU_ITEMS;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getTopicMenuItems();
  }

  /***************************************************************************************/
  getTopicMenuItems(): void {
    this.dataService.getTopicMenuItems(this.subMenuItemId)
        .subscribe(itemList => this.topicMenuItems = itemList);
  }

}
