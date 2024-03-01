import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/* MENU HOME */
import { HomeContainerComponent } from './menu-home/home-container/home-container.component';

/* MENU ABOUT */
import { AboutEolAdvocacyContainerComponent } from './menu-about/about-eol-advocacy/about-eol-advocacy-container/about-eol-advocacy-container.component';
import { AboutPractitionerContainerComponent } from './menu-about/about-practitioner/about-practitioner-container/about-practitioner-container.component';


/* MENU PLAN AHEAD */
import { ThinkAboutNeedsContainerComponent } from './menu-plan-ahead/think-about-needs/think-about-needs-container/think-about-needs-container.component';
import { ChooseYourRepContainerComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-container/choose-your-rep-container.component';
import { ConsiderAdvanceCarePlanContainerComponent } from './menu-plan-ahead/consider-advance-care-plan/consider-advance-care-plan-container/consider-advance-care-plan-container.component';

/* MENU CONSULTATION */
import { RolesOfConsultantContainerComponent } from './menu-consultations/roles-of-consultant/roles-of-consultant-container/roles-of-consultant-container.component';
import { BookConsultationContainerComponent } from './menu-consultations/book-consultation/book-consultation-container/book-consultation-container.component';

import { MakeWishesContainerComponent } from './menu-write-plans/make-wish-list/make-wishes-container/make-wishes-container.component';


import { ConsiderAdvocatesContainerComponent } from './menu-plan-ahead/considerYourAdvocates/consider-advocates-container/consider-advocates-container.component';
import { WriteAnAdvancedDirectiveContainerComponent } from './menu-write-plans/write-advanced-directive/write-an-advanced-directive-container/write-an-advanced-directive-container.component';

import { ChangeYourRepContainerComponent } from './menu-write-plans/change-your-rep/change-your-rep-container/change-your-rep-container.component';
import { ConsiderCprDirectiveContainerComponent } from './menu-plan-ahead/consider-cpr/consider-cpr-directive-container/consider-cpr-directive-container.component';
import { ConsiderEdithDirectiveContainerComponent } from './menu-plan-ahead/consider-edith/consider-edith-directive-container/consider-edith-directive-container.component';

/* AS SHOWN ON MENU */
const routes: Routes = [
    {path: '', redirectTo: '/menuHome', pathMatch: 'full'},

    {path: 'menuHome', component: HomeContainerComponent},

    {path: 'menuAbout', component: AboutEolAdvocacyContainerComponent},
    {path: 'aboutEndOfLifeAdvocacy', component: AboutEolAdvocacyContainerComponent},
    {path: 'aboutPractitioner', component: AboutPractitionerContainerComponent},

    {path: 'menuPlanAhead', component: ThinkAboutNeedsContainerComponent},
    {path: 'thinkAboutNeeds', component: ThinkAboutNeedsContainerComponent},
    {path: 'considerAdvocates', component: ConsiderAdvocatesContainerComponent},
    {path: 'considerAdvancedPlan', component: ConsiderAdvanceCarePlanContainerComponent},

    {path: 'menuWritePlans', component: MakeWishesContainerComponent},
    {path: 'makeWishList', component: MakeWishesContainerComponent},
    {path: 'chooseReps', component: ChooseYourRepContainerComponent},
    {path: 'changeRep', component: ChangeYourRepContainerComponent},
    {path: 'writeCarePlanWizard', component: WriteAnAdvancedDirectiveContainerComponent},
    {path: 'considerCPR', component: ConsiderCprDirectiveContainerComponent},
    {path: 'considerEdith', component: ConsiderEdithDirectiveContainerComponent},

    {path: 'menuConsultations', component: RolesOfConsultantContainerComponent},
    {path: 'rolesOfConsultant', component: RolesOfConsultantContainerComponent},
    {path: 'bookConsultation', component: BookConsultationContainerComponent},




];

@NgModule({
    imports:[RouterModule.forRoot(routes,  { scrollPositionRestoration: 'enabled' })],

    exports: [RouterModule]
})
export class AppRoutingModule { }
