import {Component, Input, OnInit} from '@angular/core';
import {MERIDIANS} from "../../../ts-files/meridians";
import {Meridian} from "../../../ts-files/meridian";
import {DataService} from "../../../service-files/data.service";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-meridian-wheel',
  templateUrl: './meridian-wheel.component.html',
  styleUrls: ['./meridian-wheel.component.css']
})
export class MeridianWheelComponent implements OnInit {

  @Input() source:string ='';
  @Input() detailListName:string ='';

  selectedMeridian:Meridian = MERIDIANS[0];
  now:string | null='';

  meridians = MERIDIANS;

  constructor(private dataService: DataService, public datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllMeridians()
    this.getCurrentTime()
    this.getMeridian(this.getMeridianIdForCurrentTime())
  }

  /*********************************************************************************/
  getAllMeridians(): void {
    this.dataService.getMeridians()
        .subscribe(meridianList => this.meridians = meridianList);
  }

  /*********************************************************************************/
  getCurrentTime() {
    this.now  = this.datePipe.transform(Date.now(), "h:mm")
    //this.now = current;
  }

  /*********************************************************************************/
  getMeridian(id: number) {
    this.dataService.getSelectedMeridian(id)
        .subscribe(selMer => this.selectedMeridian = selMer);
  }

  /*********************************************************************************/
  getMeridianIdForCurrentTime(): number {
    let currentHour = this.datePipe.transform(Date.now(), "H")
    this.dataService.getMeridianForCurrentHour(Number(currentHour))
        .subscribe(selTm => this.selectedMeridian = selTm)
    return Number(this.selectedMeridian.id);

  }

  /*********************************************************************************/
  //Called from Meridian-detail page
  getMeridianSummary(id: number) {
    this.dataService.getSelectedMeridian(id)
        .subscribe(selmeridian => this.selectedMeridian = selmeridian);
  }

  /*********************************************************************************/
  //called from daily-cycle page
  traceMeridianCycleStartingWith(id: number) {
    this.dataService.getSelectedMeridian(id)
        .subscribe(selmeridian => this.selectedMeridian = selmeridian);
  }


}
