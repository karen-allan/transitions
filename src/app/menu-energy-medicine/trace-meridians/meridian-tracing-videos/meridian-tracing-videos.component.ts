import { Component, OnInit, Input } from '@angular/core';
import {Meridian} from "../../../ts-files/meridian";
import {MERIDIANS} from "../../../ts-files/meridians";

@Component({
  selector: 'app-meridian-tracing-videos',
  templateUrl: './meridian-tracing-videos.component.html',
  styleUrls: ['./meridian-tracing-videos.component.css']
})
export class MeridianTracingVideosComponent implements OnInit {

  @Input() selectedMeridian:Meridian = MERIDIANS[0];

  constructor() { }

  ngOnInit(): void {
  }

}
