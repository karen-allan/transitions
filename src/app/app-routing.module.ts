import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AboutEnergyPractContainerComponent } from './menu-about/about-energy-practitioner/about-energy-pract-container/about-energy-pract-container.component';
import { AboutEolDoulaContainerComponent } from './menu-about/about-eol-doula/about-eol-doula-container/about-eol-doula-container.component';
import { AboutMeContainerComponent } from './menu-about/about-me/about-me-container/about-me-container.component';

import { BookConsultationContainerComponent } from './menu-book/book-consultation/book-consultation-container/book-consultation-container.component';
import { BookSessionContainerComponent } from './menu-book/book-session/book-session-container/book-session-container.component';


import { ChooseMemorialContainerComponent } from './menu-doula-work/choose-memorial/choose-memorial-container/choose-memorial-container.component';

import { ChooseRepresentativeContainerComponent } from './menu-doula-work/choose-representative/choose-representative-container/choose-representative-container.component';
import { CreateLegacyContainerComponent } from './menu-doula-work/create-legacy/create-legacy-container/create-legacy-container.component';
import { CareForPatientsContainerComponent } from './menu-doula-work/care-for-patients/care-for-patients-container/care-for-patients-container.component';
import { PlanAheadContainerComponent } from './menu-doula-work/plan-ahead/plan-ahead-container/plan-ahead-container.component';
import { SupportCaregiversContainerComponent } from './menu-doula-work/supportCaregivers/support-caregivers-container/support-caregivers-container.component';

import { DiscoverElementContainerComponent } from './menu-energy-medicine/discover-element/discover-element-container/discover-element-container.component';
import { DoEnergyExercisesContainerComponent } from './menu-energy-medicine/do-energy-exercises/do-energy-exercises-container/do-energy-exercises-container.component';
import { TraceMeridiansContainerComponent } from './menu-energy-medicine/trace-meridians/trace-meridians-container/trace-meridians-container.component';
import { ReduceAnxietyContainerComponent } from './menu-energy-medicine/reduce-anxiety/reduce-anxiety-container/reduce-anxiety-container.component';
import { RelieveBurnoutContainerComponent } from './menu-energy-medicine/relieve-burnout/relieve-burnout-container/relieve-burnout-container.component';
import { DecreasePainContainerComponent } from './menu-energy-medicine/decrease-pain/decrease-pain-container/decrease-pain-container.component';

// import { FaqContainerComponent } from './menu-faq/faq-container/faq-container.component';

import { HomeContainerComponent } from './menu-home/home-container/home-container.component';


import { WizardContainerComponent } from './menu-wizard/wizard-container/wizard-container.component';
import { TsdmWizardContainerComponent } from './menu-wizard/tsdm-wizard/tsdm-wizard-container/tsdm-wizard-container.component';
import { RepNineWizardContainerComponent } from './menu-wizard/rep-9-wizard/rep-nine-wizard-container/rep-nine-wizard-container.component';

/* MENU EOL DOCS */
import { AcpContainerComponent } from './menu-eol-docs/ACP/acp-container/acp-container.component';
import { DnrContainerComponent } from './menu-eol-docs/DNR/dnr-container/dnr-container.component';
import { EdithContainerComponent } from './menu-eol-docs/EDITH/edith-container/edith-container.component';

import { RepSectionNineContainerComponent } from './menu-eol-docs/REP-SECTION-NINE/rep-section-nine-container/rep-section-nine-container.component';
import { TsdmContainerComponent } from './menu-eol-docs/TSDM/tsdm-container/tsdm-container.component';
import { FrailtyMenuContainerComponent } from './menu-eol-docs/FRAILTY-MENU/frailty-menu-container/frailty-menu-container.component';

const routes: Routes = [
    {path: '', redirectTo: '/menuHome', pathMatch: 'full'},

    {path: 'menuAbout', component: AboutMeContainerComponent},
    {path: 'aboutMe', component: AboutMeContainerComponent},
    {path: 'aboutEndOfLifeDoula', component: AboutEolDoulaContainerComponent},
    {path: 'aboutEnergyPractitioner', component: AboutEnergyPractContainerComponent},

    {path: 'menuBook', component: BookSessionContainerComponent},
    {path: 'bookSession', component: BookSessionContainerComponent},
    {path: 'bookConsultation', component: BookConsultationContainerComponent},

    {path: 'menuEnergyMedicine', component: ReduceAnxietyContainerComponent},
    {path: 'reduceAnxiety', component: ReduceAnxietyContainerComponent},
    {path: 'relieveBurnout', component: RelieveBurnoutContainerComponent},
    {path: 'decreasePain', component: DecreasePainContainerComponent},
    {path: 'doEnergyExercises', component: DoEnergyExercisesContainerComponent},
    {path: 'discoverElement', component: DiscoverElementContainerComponent},
    {path: 'traceMeridians', component: TraceMeridiansContainerComponent},

    {path: 'menuDoulaWork', component: PlanAheadContainerComponent},
    {path: 'planAhead', component: PlanAheadContainerComponent},
    {path: 'chooseRepresentative', component: ChooseRepresentativeContainerComponent},
    {path: 'careForPatient', component: CareForPatientsContainerComponent},
    {path: 'supportCaregivers', component: SupportCaregiversContainerComponent},
    {path: 'createLegacy', component: CreateLegacyContainerComponent},
    {path: 'chooseMemorial', component: ChooseMemorialContainerComponent},

    {path: 'menuEOLDocs', component: FrailtyMenuContainerComponent},
    {path: 'frailtyDocMenu', component: FrailtyMenuContainerComponent},
    {path: 'tsdmDoc', component: TsdmContainerComponent},
    {path: 'repSectionNineDoc', component: RepSectionNineContainerComponent},
    {path: 'edithDoc', component: EdithContainerComponent},
    {path: 'dnrDoc', component: DnrContainerComponent},
    {path: 'acPlanDoc', component: AcpContainerComponent},

    {path: 'menuWizard', component: WizardContainerComponent},
    {path: 'tsdmWizard', component: TsdmWizardContainerComponent},
    {path: 'repNineWizard', component: RepNineWizardContainerComponent},


    {path: 'menuHome', component: HomeContainerComponent},


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
