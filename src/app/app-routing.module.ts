import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

/* MENU ABOUT */
import { AboutEnergyPractContainerComponent } from './menu-about/about-energy-practitioner/about-energy-pract-container/about-energy-pract-container.component';
import { AboutEolDoulaContainerComponent } from './menu-about/about-eol-doula/about-eol-doula-container/about-eol-doula-container.component';
import { AboutMeContainerComponent } from './menu-about/about-me/about-me-container/about-me-container.component';

/* MENU BOOK */
import { BookConsultationContainerComponent } from './menu-book/book-consultation/book-consultation-container/book-consultation-container.component';
import { BookSessionContainerComponent } from './menu-book/book-session/book-session-container/book-session-container.component';

/* MENU DOULA WORK */
import { ChooseMemorialContainerComponent } from './menu-doula-work/choose-memorial/choose-memorial-container/choose-memorial-container.component';
import { CreateLegacyContainerComponent } from './menu-doula-work/create-legacy/create-legacy-container/create-legacy-container.component';

/* MENU ENERGY MEDICINE */
import { DecreasePainContainerComponent } from './menu-energy-medicine/decrease-pain/decrease-pain-container/decrease-pain-container.component';
import { DiscoverElementContainerComponent } from './menu-energy-medicine/discover-element/discover-element-container/discover-element-container.component';
import { DoEnergyExercisesContainerComponent } from './menu-energy-medicine/do-energy-exercises/do-energy-exercises-container/do-energy-exercises-container.component';
import { ReduceAnxietyContainerComponent } from './menu-energy-medicine/reduce-anxiety/reduce-anxiety-container/reduce-anxiety-container.component';
import { RelieveBurnoutContainerComponent } from './menu-energy-medicine/relieve-burnout/relieve-burnout-container/relieve-burnout-container.component';
import { TraceMeridiansContainerComponent } from './menu-energy-medicine/trace-meridians/trace-meridians-container/trace-meridians-container.component';

/* MENU EOL DOCS */
import { EndOfLifeDocumentsContainerComponent } from './menu-doula-work/end-of-life-documents/end-of-life-documents-container/end-of-life-documents-container.component';

/* MENU HOME */
import { HomeContainerComponent } from './menu-home/home-container/home-container.component';

/* MENU WIZARD */
import { RepNineWizardContainerComponent } from './menu-doula-work/end-of-life-documents/wizard-temps/rep-nine-wizard-container/rep-nine-wizard-container.component';
import { TsdmWizardContainerComponent } from './menu-doula-work/end-of-life-documents/wizard-temps/tsdm-wizard-container/tsdm-wizard-container.component';
import { EndOfLifePlanningContainerComponent } from './menu-doula-work/end-of-life-planning/end-of-life-planning-container/end-of-life-planning-container.component';



/* AS SHOWN ON MENU */
const routes: Routes = [
    {path: '', redirectTo: '/menuHome', pathMatch: 'full'},

    {path: 'menuHome', component: HomeContainerComponent},

    {path: 'menuAbout', component: AboutMeContainerComponent},
    {path: 'aboutMe', component: AboutMeContainerComponent},
    {path: 'aboutEndOfLifeDoula', component: AboutEolDoulaContainerComponent},
    {path: 'aboutEnergyPractitioner', component: AboutEnergyPractContainerComponent},

    {path: 'menuEnergyMedicine', component: ReduceAnxietyContainerComponent},
    {path: 'reduceAnxiety', component: ReduceAnxietyContainerComponent},
    {path: 'relieveBurnout', component: RelieveBurnoutContainerComponent},
    {path: 'decreasePain', component: DecreasePainContainerComponent},
    {path: 'doEnergyExercises', component: DoEnergyExercisesContainerComponent},
    {path: 'discoverElement', component: DiscoverElementContainerComponent},
    {path: 'traceMeridians', component: TraceMeridiansContainerComponent},

    {path: 'menuDoulaWork', component: EndOfLifePlanningContainerComponent},
    {path: 'endOfLifePlanning', component: EndOfLifePlanningContainerComponent},
    {path: 'endOfLifeDocuments', component: EndOfLifeDocumentsContainerComponent},

    {path: 'createLegacy', component: CreateLegacyContainerComponent},
    {path: 'chooseMemorial', component: ChooseMemorialContainerComponent},

    {path: 'menuBook', component: BookSessionContainerComponent},
    {path: 'bookSession', component: BookSessionContainerComponent},
    {path: 'bookConsultation', component: BookConsultationContainerComponent},


];

@NgModule({
  imports:[RouterModule.forRoot(
      routes,
      {
          useHash: false,
          scrollPositionRestoration: 'enabled',
          onSameUrlNavigation: 'reload',
          anchorScrolling: 'enabled'})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
