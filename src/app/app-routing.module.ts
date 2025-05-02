import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/* MENU HOME */
import { HomeContainerComponent } from './menu-home/home-container/home-container.component';

/* MENU PLAN AHEAD */
import { ThinkAboutNeedsContainerComponent } from './menu-plan-ahead/think-about-needs/think-about-needs-container/think-about-needs-container.component';
import { ConsiderAdvocatesContainerComponent } from './menu-plan-ahead/considerYourAdvocates/consider-advocates-container/consider-advocates-container.component';
import { ConsiderAdvanceCarePlanContainerComponent } from './menu-plan-ahead/consider-advance-care-plan/consider-advance-care-plan-container/consider-advance-care-plan-container.component';
import { ConsiderYourRightsContainerComponent } from './menu-plan-ahead/consider-your-rights/consider-your-rights-container/consider-your-rights-container.component';

/* MENU WRITE PLANS */
import { MakeWishesContainerComponent } from './menu-write-plans/make-wish-list/make-wishes-container/make-wishes-container.component';
import { ChooseYourRepContainerComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-container/choose-your-rep-container.component';
import { WriteAdvanceDirectiveContainerComponent } from './menu-write-plans/write-advance-directive/write-advance-directive-container/write-advance-directive-container.component';
import { CheckOffTasksListContainerComponent } from './menu-write-plans/check-off-tasks-list/check-off-tasks-list-container/check-off-tasks-list-container.component';

/* MENU CONSULTATION */
import { TestimonialsFeesContainerComponent } from './menu-book/fees/testimonials-fees-container/testimonials-fees-container.component';
import { BookConsultationContainerComponent } from './menu-book/consultations/book-consultation-container/book-consultation-container.component';

/* MENU ABOUT */
import { AboutEolAdvocacyContainerComponent } from './menu-about/support/about-eol-advocacy-container/about-eol-advocacy-container.component';
import { AboutPractitionerContainerComponent } from './menu-about/us/about-practitioner-container/about-practitioner-container.component';

/* non menu related paths */
import { ScreenFormMakeWishListContainerComponent } from './screen-forms/wizards/make-wish-list/screen-form-make-wish-list-container/screen-form-make-wish-list-container.component';
import { ScreenFormChooseRepContainerComponent } from './screen-forms/wizards/choose-rep/screen-form-choose-rep-container/screen-form-choose-rep-container.component';
import { ScreenFormWriteDirectiveContainerComponent } from './screen-forms/wizards/write-plan/screen-form-write-directive-container/screen-form-write-directive-container.component';


/* AS SHOWN ON MENU */
const routes: Routes = [
    {path: '', redirectTo: '/menuHome', pathMatch: 'full'},

    {path: 'menuHome', component: HomeContainerComponent},

    {path: 'menuPlanAhead', component: ThinkAboutNeedsContainerComponent},
    {path: 'thinkAboutNeeds', component: ThinkAboutNeedsContainerComponent},
    {path: 'considerAdvocates', component: ConsiderAdvocatesContainerComponent},
    {path: 'considerAdvancePlan', component: ConsiderAdvanceCarePlanContainerComponent},
    {path: 'considerYourRights', component: ConsiderYourRightsContainerComponent},

    {path: 'menuWritePlans', component: MakeWishesContainerComponent},
    {path: 'makeWishList', component: MakeWishesContainerComponent},
    {path: 'chooseReps', component: ChooseYourRepContainerComponent},
    {path: 'writeCarePlan', component: WriteAdvanceDirectiveContainerComponent},
    {path: 'checkOffList', component: CheckOffTasksListContainerComponent},

    {path: 'menuConsultations', component: TestimonialsFeesContainerComponent},
    {path: 'testimonials', component: TestimonialsFeesContainerComponent},
    {path: 'bookConsultation', component: BookConsultationContainerComponent},

    {path: 'menuAbout', component: AboutPractitionerContainerComponent},
    {path: 'aboutEndOfLifeAdvocacy', component: AboutEolAdvocacyContainerComponent},
    {path: 'aboutPractitioner', component: AboutPractitionerContainerComponent},

    {path: 'callScreenFormWishList', component: ScreenFormMakeWishListContainerComponent},
    {path: 'callScreenFormChooseReps', component: ScreenFormChooseRepContainerComponent},
    {path: 'callScreenFormMakePlan', component: ScreenFormWriteDirectiveContainerComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes,  { scrollPositionRestoration: 'enabled' })],

    exports: [RouterModule]
})
export class AppRoutingModule { }
