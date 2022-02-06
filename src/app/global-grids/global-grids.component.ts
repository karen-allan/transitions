import {Component, Input, OnInit} from '@angular/core';
import {SUBJECTS} from "../ts-files/subjects";
import {DataService} from "../service-files/data.service";
import {Element} from "../ts-files/element";
import {ELEMENTS} from "../ts-files/elements";


@Component({
  selector: 'app-global-grids',
  templateUrl: './global-grids.component.html',
  styleUrls: ['./global-grids.component.css']
})
export class GlobalGridsComponent implements OnInit {

  @Input() detailListName: string ='';
  @Input() selectedElement: Element = ELEMENTS[0];

  /* @Input() selectedMeridian: Meridian;*/

  homeSubjects = SUBJECTS;
  homeMin = 10;
  homeMax = 11;

  aboutSubjects = SUBJECTS;
  aboutMin = 21;
  aboutMax = 22;

  supportSubjects = SUBJECTS;
  supportMin = 31;
  supportMax = 32;

  doulaSubjects = SUBJECTS;
  doulaMin = 311;
  doulaMax = 316;

  energySubjects = SUBJECTS;
  energyMin = 321;
  energyMax = 326;

  // selected element attribute, state and corrections are in selectedElement ts files
  elementSubjects = SUBJECTS;
  elementMin = 4010;
  elementMax = 4012;

 /* helpSubjects = SUBJECTS;
  helpMin = 300;
  helpMax = 311;
*/



  // selected element attribute, state and corrections are in selectedElement ts files
  /*elementSubjects = SUBJECTS;
  elementMin = 4010;
  elementMax = 4012;*/

  // selected meridian attribute, state and corrections are in selectedMeridian ts files
 /* meridianSubjects = SUBJECTS;
  meridianMin = 4020;
  meridianMax = 4022;*/



  constructor(private dataService: DataService) {
  }

  /***************************************************************************************/
  ngOnInit(): void {
        if (this.detailListName == "list-home") {
          this.getHomeSubjects();
        }
        else if (this.detailListName == "list-about") {
          this.getAboutSubjects();
        }
        else if (this.detailListName == "list-support") {
          this.getSupportSubjects();
        }
        else if (this.detailListName == "list-doula") {
          this.getDoulaSubjects();
        }
        else if (this.detailListName == "list-energy") {
          this.getEnergySubjects();
        }
        else if (this.detailListName == "list-element") {
          this.getElementSubjects();
        }

    }
  /***************************************************************************************/
  getHomeSubjects(): void {
    this.dataService.getSelectedSubjects(this.homeMin, this.homeMax)
        .subscribe(subjectList => this.homeSubjects = subjectList);
  }

  /***************************************************************************************/
  getAboutSubjects(): void {
    this.dataService.getSelectedSubjects(this.aboutMin, this.aboutMax)
        .subscribe(subjectList => this.aboutSubjects = subjectList);
  }

  /***************************************************************************************/
  getSupportSubjects(): void {
    this.dataService.getSelectedSubjects(this.supportMin, this.supportMax)
        .subscribe(subjectList => this.supportSubjects = subjectList);
  }

  /***************************************************************************************/
  getDoulaSubjects(): void {
    this.dataService.getSelectedSubjects(this.doulaMin, this.doulaMax)
        .subscribe(subjectList => this.doulaSubjects = subjectList);
  }

  /***************************************************************************************/
  getEnergySubjects(): void {
    this.dataService.getSelectedSubjects(this.energyMin, this.energyMax)
        .subscribe(subjectList => this.energySubjects = subjectList);
  }

  /***************************************************************************************/
  getElementSubjects(): void {
    this.dataService.getSelectedSubjects(this.elementMin, this.elementMax)
        .subscribe(subjectList => this.elementSubjects = subjectList);
  }



}