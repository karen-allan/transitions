import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/* MENU ABOUT */
import { AboutEolAdvocacyContainerComponent } from './menu-about/about-eol-advocacy/about-eol-advocacy-container/about-eol-advocacy-container.component';
import { AboutPractitionerContainerComponent } from './menu-about/about-practitioner/about-practitioner-container/about-practitioner-container.component';

/* MENU CONSULTATION */
import { RolesOfConsultantContainerComponent } from './menu-consultations/roles-of-consultant/roles-of-consultant-container/roles-of-consultant-container.component';
import { BookConsultationContainerComponent } from './menu-consultations/book-consultation/book-consultation-container/book-consultation-container.component';

/* MENU HOME */
import { HomeContainerComponent } from './menu-home/home-container/home-container.component';

/* MENU PLAN AHEAD */

import { ThinkAboutNeedsContainerComponent } from './menu-plan-ahead/think-about-needs/think-about-needs-container/think-about-needs-container.component';

// import { PlanAheadWizardContainerComponent } from './menu-plan-ahead/plan-ahead-wizard/plan-ahead-wizard-container/plan-ahead-wizard-container.component';
import { DocumentsToSignContainerComponent } from './menu-plan-ahead/documents-to-sign/documents-to-sign-container/documents-to-sign-container.component';
import { ChooseYourRepContainerComponent } from './menu-plan-ahead/choose-your-representative/choose-your-rep-container/choose-your-rep-container.component';



import { RepNineWizardContainerComponent } from './global-wizards/rep-nine-wizard/rep-nine-wizard-container/rep-nine-wizard-container.component';

import { ThinkAboutNeedsPrintoutComponent } from './menu-plan-ahead/think-about-needs/think-about-needs-printout/think-about-needs-printout.component';


/* AS SHOWN ON MENU */
const routes: Routes = [
    {path: '', redirectTo: '/menuHome', pathMatch: 'full'},

    {path: 'menuHome', component: HomeContainerComponent},

    {path: 'menuAbout', component: AboutEolAdvocacyContainerComponent},
    {path: 'aboutEndOfLifeAdvocacy', component: AboutEolAdvocacyContainerComponent},
    {path: 'aboutPractitioner', component: AboutPractitionerContainerComponent},

    {path: 'menuPlanAhead', component: ThinkAboutNeedsContainerComponent},
    {path: 'thinkAboutNeeds', component: ThinkAboutNeedsContainerComponent},
    {path: 'chooseRep', component: ChooseYourRepContainerComponent},
    {path: 'documentsToSign', component: DocumentsToSignContainerComponent},

    {path: 'menuConsultations', component: RolesOfConsultantContainerComponent},
    {path: 'rolesOfConsultant', component: RolesOfConsultantContainerComponent},
    {path: 'bookConsultation', component: BookConsultationContainerComponent},

    // {path: 'rep-wizard', component: RepNineWizardContainerComponent},

    // {path: 'printWizard', component: ThinkAboutNeedsPrintoutComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes,  { scrollPositionRestoration: 'enabled' })],

    exports: [RouterModule]
})
export class AppRoutingModule { }
