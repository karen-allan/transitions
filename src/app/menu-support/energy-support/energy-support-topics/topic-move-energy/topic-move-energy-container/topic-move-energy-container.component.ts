import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../../service-files/data.service";
import {DerExercise} from "../../../../../ts-files/derExercise";
import {DER_EXERCISES} from "../../../../../ts-files/derExercises";

@Component({
  selector: 'app-topic-move-energy-container',
  templateUrl: './topic-move-energy-container.component.html',
  styleUrls: ['./topic-move-energy-container.component.css']
})
export class TopicMoveEnergyContainerComponent implements OnInit {

  menuItemId = 3;
  subMenuItemId = 31;
  topicMenuItemId = 324;

  detailHeaderName = 'header-topic-energy-help-exercises'
  title='Move your Energy With Exercise'

  constructor() { }

  ngOnInit(): void {

  }


}
