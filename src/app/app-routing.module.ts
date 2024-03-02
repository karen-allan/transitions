import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/* MENU HOME */
import { HomeContainerComponent } from './menu-home/home-container/home-container.component';

/* MENU ABOUT */
import { AboutEolAdvocacyContainerComponent } from './menu-about/about-eol-advocacy/about-eol-advocacy-container/about-eol-advocacy-container.component';
import { AboutPractitionerContainerComponent } from './menu-about/about-practitioner/about-practitioner-container/about-practitioner-container.component';

/* MENU CONSULTATION */
import { RolesOfConsultantContainerComponent } from './menu-consultations/roles-of-consultant/roles-of-consultant-container/roles-of-consultant-container.component';
import { BookConsultationContainerComponent } from './menu-consultations/book-consultation/book-consultation-container/book-consultation-container.component';

/* MENU PLAN AHEAD */
import { ConsiderAdvanceCarePlanContainerComponent } from './menu-plan-ahead/consider-advance-care-plan/consider-advance-care-plan-container/consider-advance-care-plan-container.component';
import { ConsiderCprDirectiveContainerComponent } from './menu-plan-ahead/consider-cpr/consider-cpr-directive-container/consider-cpr-directive-container.component';
import { ConsiderEdithDirectiveContainerComponent } from './menu-plan-ahead/consider-edith/consider-edith-directive-container/consider-edith-directive-container.component';
import { ConsiderAdvocatesContainerComponent } from './menu-plan-ahead/considerYourAdvocates/consider-advocates-container/consider-advocates-container.component';
import { ThinkAboutNeedsContainerComponent } from './menu-plan-ahead/think-about-needs/think-about-needs-container/think-about-needs-container.component';

/* MENU WRITE PLANS */
import { ChangeYourRepContainerComponent } from './menu-write-plans/change-your-rep/change-your-rep-container/change-your-rep-container.component';
import { CheckOffTasksListContainerComponent } from './menu-write-plans/check-off-tasks-list/check-off-tasks-list-container/check-off-tasks-list-container.component';
import { ChooseYourRepContainerComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-container/choose-your-rep-container.component';
import { MakeWishesContainerComponent } from './menu-write-plans/make-wish-list/make-wishes-container/make-wishes-container.component';
import { WriteAdvanceDirectiveContainerComponent } from './menu-write-plans/write-advance-directive/write-advance-directive-container/write-advance-directive-container.component';

/* AS SHOWN ON MENU */
const routes: Routes = [
    {path: '', redirectTo: '/menuHome', pathMatch: 'full'},

    {path: 'menuHome', component: HomeContainerComponent},

    {path: 'menuAbout', component: AboutEolAdvocacyContainerComponent},
    {path: 'aboutEndOfLifeAdvocacy', component: AboutEolAdvocacyContainerComponent},
    {path: 'aboutPractitioner', component: AboutPractitionerContainerComponent},

    {path: 'menuConsultations', component: RolesOfConsultantContainerComponent},
    {path: 'rolesOfConsultant', component: RolesOfConsultantContainerComponent},
    {path: 'bookConsultation', component: BookConsultationContainerComponent},

    {path: 'menuPlanAhead', component: ThinkAboutNeedsContainerComponent},
    {path: 'considerAdvancePlan', component: ConsiderAdvanceCarePlanContainerComponent},
    {path: 'considerCPR', component: ConsiderCprDirectiveContainerComponent},
    {path: 'considerEdith', component: ConsiderEdithDirectiveContainerComponent},
    {path: 'considerAdvocates', component: ConsiderAdvocatesContainerComponent},
    {path: 'thinkAboutNeeds', component: ThinkAboutNeedsContainerComponent},

    {path: 'menuWritePlans', component: MakeWishesContainerComponent},
    {path: 'changeRep', component: ChangeYourRepContainerComponent},
    {path: 'checkOffList', component: CheckOffTasksListContainerComponent},
    {path: 'chooseReps', component: ChooseYourRepContainerComponent},
    {path: 'makeWishList', component: MakeWishesContainerComponent},
    {path: 'writeCarePlan', component: WriteAdvanceDirectiveContainerComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes,  { scrollPositionRestoration: 'enabled' })],

    exports: [RouterModule]
})
export class AppRoutingModule { }
