import {Component, Input, OnInit} from '@angular/core';
import {SUBJECTS} from "../ts-files/subjects";
import {DataService} from "../service-files/data.service";



@Component({
  selector: 'app-global-grids',
  templateUrl: './global-grids.component.html',
  styleUrls: ['./global-grids.component.css']
})
export class GlobalGridsComponent implements OnInit {

    @Input() detailListName: string ='';
    @Input() subMenuItemId:number=0;

    //ABOUT
    aboutSubjects = SUBJECTS;
    aboutMin = 20;
    aboutMax = 22;

    //SUPPORT ENERGY
    energySubjects = SUBJECTS;
    energyMin = 30;
    energyMax = 35;

    //SUPPORT DOULAS
    doulaSubjects = SUBJECTS;
    doulaMin = 40;
    doulaMax = 45;


  constructor(private dataService: DataService) {
  }

  /***************************************************************************************/
  ngOnInit(): void {

        if (this.detailListName == "list-about") {
          this.getAboutSubjects();
        }
        else if (this.detailListName == "list-doula-work") {
          this.getDoulaSubjects();
        }
        else if (this.detailListName == "list-energy-medicine") {
            this.getEnergySubjects();
        }

    }

  /***************************************************************************************/
  getAboutSubjects(): void {
    this.dataService.getSelectedSubjects(this.aboutMin, this.aboutMax)
        .subscribe(subjectList => this.aboutSubjects = subjectList);
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




}