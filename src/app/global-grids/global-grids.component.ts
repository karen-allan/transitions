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

    homeSubjects = SUBJECTS;
    homeMin = 10;
    homeMax = 11;

    aboutSubjects = SUBJECTS;
    aboutMin = 21;
    aboutMax = 22;

    aboutEnergySubjects = SUBJECTS;
    aboutEnergyMin = 23;
    aboutEnergyMax = 24;

    aboutDoulaSubjects = SUBJECTS;
    aboutDoulaMin = 25;
    aboutDoulaMax = 26;

    supportSubjects = SUBJECTS;
    supportMin = 31;
    supportMax = 32;

    bookSubjects = SUBJECTS;
    bookMin = 41;
    bookMax = 42;

    bookConsultSubjects = SUBJECTS;
    bookConsultMin = 43;
    bookConsultMax = 44;

    bookSessionSubjects = SUBJECTS;
    bookSessionMin = 45;
    bookSessionMax = 46;

    doulaSubjects = SUBJECTS;
    doulaMin = 311;
    doulaMax = 316;

    energySubjects = SUBJECTS;
    energyMin = 321;
    energyMax = 326;

    // Doula bottom Grid menu
    repsSubjects = SUBJECTS;
    repsMin = 3000;
    repsMax = 3005;

    advocateSubjects = SUBJECTS;
    advocateMin = 3010;
    advocateMax = 3015;

    patientSubjects = SUBJECTS;
    patientMin = 3020;
    patientMax = 3025;

    caregiverSubjects = SUBJECTS;
    caregiverMin = 3030;
    caregiverMax = 3035;

    legacySubjects = SUBJECTS;
    legacyMin = 3040;
    legacyMax = 3045;

    ceremonySubjects = SUBJECTS;
    ceremonyMin = 3050;
    ceremonyMax = 3055;

    //Energy bottom Grid menu
    anxietySubjects = SUBJECTS;
    anxietyMin = 3060;
    anxietyMax = 3065;

    burnoutSubjects = SUBJECTS;
    burnoutMin = 3070;
    burnoutMax = 3075;

    painSubjects = SUBJECTS;
    painMin = 3080;
    painMax = 3085;

    moveSubjects = SUBJECTS;
    moveMin = 3090;
    moveMax = 3095;

    elementSubjects = SUBJECTS;
    elementMin = 3100;
    elementMax = 3105;

    meridianSubjects = SUBJECTS;
    meridianMin = 3110;
    meridianMax = 3115;

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
        else if (this.detailListName == "list-about-energy") {
            this.getAboutEnergySubjects();
        }
        else if (this.detailListName == "list-about-doula") {
            this.getAboutDoulaSubjects();
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

        else if (this.detailListName == "list-representative") {
          this.getRepresentativeSubjects();
        }
        else if (this.detailListName == "list-advocate") {
          this.getAdvocateSubjects();
        }
        else if (this.detailListName == "list-patient") {
          this.getPatientSubjects();
        }
        else if (this.detailListName == "list-caregiver") {
            this.getCaregiverSubjects();
        }
        else if (this.detailListName == "list-legacy") {
            this.getLegacySubjects();
        }
        else if (this.detailListName == "list-ceremony") {
            this.getCeremonySubjects();
        }
        else if (this.detailListName == "list-anxiety") {
          this.getAnxietySubjects();
        }
        else if (this.detailListName == "list-burnout") {
            this.getBurnoutSubjects();
        }
        else if (this.detailListName == "list-pain") {
            this.getPainSubjects();
        }
        else if (this.detailListName == "list-move") {
            this.getMoveSubjects();
        }
        else if (this.detailListName == "list-element") {
            this.getElementSubjects();
        }
        else if (this.detailListName == "list-meridian") {
            this.getMeridianSubjects();
        }
        else if (this.detailListName == "list-book") {
            this.getBookSubjects();
        }
        else if (this.detailListName == "list-book-consult") {
            this.getBookConsultSubjects();
        }
        else if (this.detailListName == "list-book-session") {
            this.getBookSessionSubjects();
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
    getAboutEnergySubjects(): void {
        this.dataService.getSelectedSubjects(this.aboutEnergyMin, this.aboutEnergyMax)
            .subscribe(subjectList => this.aboutEnergySubjects = subjectList);
    }

    /***************************************************************************************/
    getAboutDoulaSubjects(): void {
        this.dataService.getSelectedSubjects(this.aboutDoulaMin, this.aboutDoulaMax)
            .subscribe(subjectList => this.aboutDoulaSubjects = subjectList);
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
  getRepresentativeSubjects(): void {
    this.dataService.getSelectedSubjects(this.repsMin, this.repsMax)
        .subscribe(subjectList => this.repsSubjects = subjectList);
  }

  /***************************************************************************************/
  getAdvocateSubjects(): void {
    this.dataService.getSelectedSubjects(this.advocateMin, this.advocateMax)
        .subscribe(subjectList => this.advocateSubjects = subjectList);
  }

  /***************************************************************************************/
  getPatientSubjects(): void {
    this.dataService.getSelectedSubjects(this.patientMin, this.patientMax)
        .subscribe(subjectList => this.patientSubjects = subjectList);
  }

    /***************************************************************************************/
    getCaregiverSubjects(): void {
        this.dataService.getSelectedSubjects(this.caregiverMin, this.caregiverMax)
            .subscribe(subjectList => this.caregiverSubjects = subjectList);
    }

    /***************************************************************************************/
    getLegacySubjects(): void {
        this.dataService.getSelectedSubjects(this.legacyMin, this.legacyMax)
            .subscribe(subjectList => this.legacySubjects = subjectList);
    }

    /***************************************************************************************/
    getCeremonySubjects(): void {
        this.dataService.getSelectedSubjects(this.ceremonyMin, this.ceremonyMax)
            .subscribe(subjectList => this.ceremonySubjects = subjectList);
    }

  /***************************************************************************************/
  getEnergySubjects(): void {
    this.dataService.getSelectedSubjects(this.energyMin, this.energyMax)
        .subscribe(subjectList => this.energySubjects = subjectList);
  }

  /***************************************************************************************/
  getAnxietySubjects(): void {
    this.dataService.getSelectedSubjects(this.anxietyMin, this.anxietyMax)
        .subscribe(subjectList => this.anxietySubjects = subjectList);
  }

    /***************************************************************************************/
    getBurnoutSubjects(): void {
        this.dataService.getSelectedSubjects(this.burnoutMin, this.burnoutMax)
            .subscribe(subjectList => this.burnoutSubjects = subjectList);
    }

    /***************************************************************************************/
    getPainSubjects(): void {
        this.dataService.getSelectedSubjects(this.painMin, this.painMax)
            .subscribe(subjectList => this.painSubjects = subjectList);
    }

    /***************************************************************************************/
    getMoveSubjects(): void {
        this.dataService.getSelectedSubjects(this.moveMin, this.moveMax)
            .subscribe(subjectList => this.moveSubjects = subjectList);
    }

    /***************************************************************************************/
    getElementSubjects(): void {
        this.dataService.getSelectedSubjects(this.elementMin, this.elementMax)
            .subscribe(subjectList => this.elementSubjects = subjectList);
    }

    /***************************************************************************************/
    getMeridianSubjects(): void {
        this.dataService.getSelectedSubjects(this.meridianMin, this.meridianMax)
            .subscribe(subjectList => this.meridianSubjects = subjectList);
    }

    /***************************************************************************************/
    getBookSubjects(): void {
        this.dataService.getSelectedSubjects(this.bookMin, this.bookMax)
            .subscribe(subjectList => this.bookSubjects = subjectList);
    }

    /***************************************************************************************/
    getBookConsultSubjects(): void {
        this.dataService.getSelectedSubjects(this.bookConsultMin, this.bookConsultMax)
            .subscribe(subjectList => this.bookConsultSubjects = subjectList);
    }

    /***************************************************************************************/
    getBookSessionSubjects(): void {
        this.dataService.getSelectedSubjects(this.bookSessionMin, this.bookSessionMax)
            .subscribe(subjectList => this.bookSessionSubjects = subjectList);
    }
}