import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service-files/in-memory-data.service';
import { NgxMaskModule } from 'ngx-mask'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


//generating components in full
/*ng generate component xxx --standalone false */

//false boolean syntax
// <ng-container *ngIf="!modal">

//sending and receiving a param sent via routerLink
// <a [routerLink]="['/callScreenFormMakeListMobile/', wishes.id]">
// {path: 'callScreenFormMakeListMobile/id', component: ScreenFormMakeWishListContainerComponent},
//const wishesId = this.route.snapshot.paramMap.get('id');

/************************************************************* DIALOGS **************************************************************/

import { DialogDirectiveComponent } from './screen-forms/wizards/dialogs/dialog-directive/dialog-directive.component';
import { DialogRepsComponent } from './screen-forms/wizards/dialogs/dialog-reps/dialog-reps.component';
import { DialogWishListComponent } from './screen-forms/wizards/dialogs/dialog-wish-list/dialog-wish-list.component';

/************************************************************* GLOBAL FOOTER **************************************************************/

import { GlobalFooterComponent } from './global-footer/global-footer.component';

/************************************************************* GLOBAL MENU ****************************************************************/

import { GlobalMenuComponent } from './global-menu/global-menu.component';

/************************************************************* MENU ABOUT *****************************************************************/

/** ABOUT EOL ADVOCACY FOLDER **/
import { AboutEolAdvocacyContainerComponent } from './menu-about/about-eol-advocacy/about-eol-advocacy-container/about-eol-advocacy-container.component';
import { AboutEolAdvocacyOverviewComponent } from './menu-about/about-eol-advocacy/about-eol-advocacy-overview/about-eol-advocacy-overview.component';

/** ABOUT PRACTITIONER FOLDER **/
import { AboutPractitionerContainerComponent } from './menu-about/about-practitioner/about-practitioner-container/about-practitioner-container.component';
import { AboutPractitionerOverviewComponent } from './menu-about/about-practitioner/about-practitioner-overview/about-practitioner-overview.component';

/************************************************************* MENU CONSULTATIONS  ********************************************************/

/** BOOK CONSULTATION FOLDER **/
import { BookConsultationContainerComponent } from './menu-consultations/book-consultation/book-consultation-container/book-consultation-container.component';
import { BookConsultationOverviewComponent } from './menu-consultations/book-consultation/book-consultation-overview/book-consultation-overview.component';

/** TESTIMONIALS FOLDER **/
import { TestimonialsFeesContainerComponent } from './menu-consultations/testimonials-fees/testimonials-fees-container/testimonials-fees-container.component';
import { TestimonialsFeesOverviewComponent } from './menu-consultations/testimonials-fees/testimonials-fees-overview/testimonials-fees-overview.component';

/************************************************************* MENU HOME ******************************************************************/

import {HomeContainerComponent} from './menu-home/home-container/home-container.component';
import {HomeOverviewComponent} from './menu-home/home-overview/home-overview.component';

/************************************************************* MENU PLAN AHEAD ************************************************************/

/** CONSIDER ADVANCE CARE PLAN FOLDER **/
import { ConsiderAdvanceCarePlanContainerComponent } from './menu-plan-ahead/consider-advance-care-plan/consider-advance-care-plan-container/consider-advance-care-plan-container.component';
import { ConsiderAdvanceCarePlanOverviewComponent } from './menu-plan-ahead/consider-advance-care-plan/consider-advance-care-plan-overview/consider-advance-care-plan-overview.component';

/** CONSIDER YOUR RIGHTS FOLDER **/
import { ConsiderYourRightsContainerComponent } from './menu-plan-ahead/consider-your-rights/consider-your-rights-container/consider-your-rights-container.component';
import { ConsiderYourRightsOverviewComponent } from './menu-plan-ahead/consider-your-rights/consider-your-rights-overview/consider-your-rights-overview.component';

/** CONSIDER YOUR ADVOCATES FOLDER **/
import { ConsiderAdvocatesContainerComponent } from './menu-plan-ahead/considerYourAdvocates/consider-advocates-container/consider-advocates-container.component';
import { ConsiderAdvocatesOverviewComponent } from './menu-plan-ahead/considerYourAdvocates/consider-advocates-overview/consider-advocates-overview.component';

/** THINK ABOUT NEEDS FOLDER **/
import { ThinkAboutNeedsContainerComponent } from './menu-plan-ahead/think-about-needs/think-about-needs-container/think-about-needs-container.component';
import { ThinkAboutNeedsOverviewComponent } from './menu-plan-ahead/think-about-needs/think-about-needs-overview/think-about-needs-overview.component';

/************************************************************* MENU WRITE PLANS ***********************************************************/

/** CHECK OFF TASKS LIST FOLDER **/
import { CheckOffTasksListContainerComponent } from './menu-write-plans/check-off-tasks-list/check-off-tasks-list-container/check-off-tasks-list-container.component';
import { CheckOffTasksListOverviewComponent } from './menu-write-plans/check-off-tasks-list/check-off-tasks-list-overview/check-off-tasks-list-overview.component';

/** CHOOSE YOUR REP FOLDER **/
import { ChooseYourRepContainerComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-container/choose-your-rep-container.component';
import { ChooseYourRepOverviewComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-overview/choose-your-rep-overview.component';

/** MAKE WISH LIST FOLDER **/
import { MakeWishesContainerComponent } from './menu-write-plans/make-wish-list/make-wishes-container/make-wishes-container.component';
import { MakeWishesOverviewComponent } from './menu-write-plans/make-wish-list/make-wishes-overview/make-wishes-overview.component';

/** WRITE AN ADVANCE CARE DIRECTIVE FOLDER **/
import { WriteAdvanceDirectiveOverviewComponent } from './menu-write-plans/write-advance-directive/write-advance-directive-overview/write-advance-directive-overview.component';
import { WriteAdvanceDirectiveContainerComponent } from './menu-write-plans/write-advance-directive/write-advance-directive-container/write-advance-directive-container.component';

/************************************************************* PRINT FORMS ***********************************************************/

import { PrintFormCaregiverConsultComponent } from './print-forms/consultations/print-form-caregiver-consult/print-form-caregiver-consult.component';

import { PrintFormPatientConsultComponent } from './print-forms/consultations/print-form-patient-consult/print-form-patient-consult.component';
import { PrintFormPlannerConsultComponent } from './print-forms/consultations/print-form-planner-consult/print-form-planner-consult.component';

/**********************************************************  SUB FORMS ***********************************************************/

import { PrintSubFormCaregiverComponent } from './print-forms/consultations/sub-forms/print-sub-form-caregiver/print-sub-form-caregiver.component';
import { PrintSubFormDemographicComponent } from './print-forms/consultations/sub-forms/print-sub-form-demographic/print-sub-form-demographic.component';
import { PrintSubFormDisclaimerComponent } from './print-forms/consultations/sub-forms/print-sub-form-disclaimer/print-sub-form-disclaimer.component';
import { PrintSubFormFrailityComponent } from './print-forms/consultations/sub-forms/print-sub-form-fraility/print-sub-form-fraility.component';
import { PrintSubFormMedicalComponent } from './print-forms/consultations/sub-forms/print-sub-form-medical/print-sub-form-medical.component';
import { PrintSubFormPatientComponent } from './print-forms/consultations/sub-forms/print-sub-form-patient/print-sub-form-patient.component';
import { PrintSubFormPlannerComponent } from './print-forms/consultations/sub-forms/print-sub-form-planner/print-sub-form-planner.component';

/************************************************************* PRINT MODALS ***********************************************************/

import { PrintModalChooseYourRepComponent } from './print-forms/wizards/print-modal-choose-your-rep/print-modal-choose-your-rep.component';

import { PrintModalMakeWishListComponent } from './print-forms/wizards/print-modal-make-wish-list/print-modal-make-wish-list.component';
import { PrintModalWriteAdvanceDirectiveComponent } from './print-forms/wizards/print-modal-write-advance-directive/print-modal-write-advance-directive.component';

/************************************************************* SCREEN FORMS ***********************************************************/
import { ScreenFormCaregiverConsultComponent } from './screen-forms/consultations/screen-form-caregiver-consult/screen-form-caregiver-consult.component';
import { ScreenFormChooseRepContainerComponent } from './screen-forms/wizards/choose-rep/screen-form-choose-rep-container/screen-form-choose-rep-container.component';
import { ScreenFormChooseRepOverviewComponent } from './screen-forms/wizards/choose-rep/screen-form-choose-rep-overview/screen-form-choose-rep-overview.component';

import { ScreenFormMakeWishListContainerComponent } from './screen-forms/wizards/make-wish-list/screen-form-make-wish-list-container/screen-form-make-wish-list-container.component';
import { ScreenFormMakeWishListOverviewComponent } from './screen-forms/wizards/make-wish-list/screen-form-make-wish-list-overview/screen-form-make-wish-list-overview.component';

import { ScreenFormPatientConsultComponent } from './screen-forms/consultations/screen-form-patient-consult/screen-form-patient-consult.component';
import { ScreenFormPlannerConsultComponent } from './screen-forms/consultations/screen-form-planner-consult/screen-form-planner-consult.component';

import { ScreenFormWriteDirectiveOverviewComponent } from './screen-forms/wizards/write-plan/screen-form-write-directive-overview/screen-form-write-directive-overview.component';
import { ScreenFormWriteDirectiveContainerComponent } from './screen-forms/wizards/write-plan/screen-form-write-directive-container/screen-form-write-directive-container.component';

/****************************************************SUB FORMS ***********************************************************/
import { ScreenSubFormCaregiverComponent } from './screen-forms/consultations/sub-forms/screen-sub-form-caregiver/screen-sub-form-caregiver.component';
import { ScreenSubFormDemographicComponent } from './screen-forms/consultations/sub-forms/screen-sub-form-demographic/screen-sub-form-demographic.component';
import { ScreenSubFormDisclaimerComponent } from './screen-forms/consultations/sub-forms/screen-sub-form-disclaimer/screen-sub-form-disclaimer.component';
import { ScreenSubFormFrailityComponent } from './screen-forms/consultations/sub-forms/screen-sub-form-fraility/screen-sub-form-fraility.component';
import { ScreenSubFormMedicalComponent } from './screen-forms/consultations/sub-forms/screen-sub-form-medical/screen-sub-form-medical.component';
import { ScreenSubFormPatientComponent } from './screen-forms/consultations/sub-forms/screen-sub-form-patient/screen-sub-form-patient.component';
import { ScreenSubFormPlannerComponent } from './screen-forms/consultations/sub-forms/screen-sub-form-planner/screen-sub-form-planner.component';

import { PrintFooterComponent } from './print-forms/print-footer/print-footer.component';
import { PrintHeaderComponent } from './print-forms/print-header/print-header.component';
import { DialogHeaderComponent } from './screen-forms/wizards/dialogs/dialog-header/dialog-header.component';


@NgModule({
    declarations: [
        AppComponent,

        /******************************* GLOBAL FOOTER *******************************/
        GlobalFooterComponent,

        /******************************* GLOBAL MENU *******************************/
        GlobalMenuComponent,

        /******************************* MENU ABOUT *******************************/
        /* ABOUT EOL ADVOCACY FOLDER */
        AboutEolAdvocacyContainerComponent,
        AboutEolAdvocacyOverviewComponent,
        /* ABOUT PRACTITIONER FOLDER */
        AboutPractitionerContainerComponent,
        AboutPractitionerOverviewComponent,

        /******************************* MENU CONSULTATIONS *******************************/
        /* BOOK CONSULTATIONS */
        BookConsultationContainerComponent,
        BookConsultationOverviewComponent,

        /* TESTIMONIALS */
        TestimonialsFeesContainerComponent,
        TestimonialsFeesOverviewComponent,

        /******************************* MENU HOME *******************************/
        HomeContainerComponent,
        HomeOverviewComponent,

        /****************************** MENU PLAN AHEAD ************************/
        /* CONSIDER ADVANCE CARE PLAN FOLDER */
        ConsiderAdvanceCarePlanContainerComponent,
        ConsiderAdvanceCarePlanOverviewComponent,

        /* CONSIDER YOUR RIGHTS FOLDER */
        ConsiderYourRightsContainerComponent,
        ConsiderYourRightsOverviewComponent,

        /* CONSIDER YOUR ADVOCATES FOLDER */
        ConsiderAdvocatesContainerComponent,
        ConsiderAdvocatesOverviewComponent,

        /* THINK ABOUT NEEDS FOLDER */
        ThinkAboutNeedsContainerComponent,
        ThinkAboutNeedsOverviewComponent,

        /****************************** MENU WRITE PLANS ************************/
        /* CHECK OFF TASKS LIST FOLDER */
        CheckOffTasksListContainerComponent,
        CheckOffTasksListOverviewComponent,
        /* CHOOSE YOUR REP FOLDER */
        ChooseYourRepContainerComponent,
        ChooseYourRepOverviewComponent,
        /* MAKE WISH LIST FOLDER */

        /* WRITE ADVANCED DIRECTIVE FOLDER */
        WriteAdvanceDirectiveOverviewComponent,
        WriteAdvanceDirectiveContainerComponent,

        /******************************* PRINT FORMS *******************************/
        PrintSubFormCaregiverComponent,
        PrintSubFormDemographicComponent,
        PrintSubFormDisclaimerComponent,
        PrintSubFormFrailityComponent,
        PrintSubFormMedicalComponent,
        PrintSubFormPatientComponent,
        PrintSubFormPlannerComponent,
        PrintFormCaregiverConsultComponent,
        PrintFormPatientConsultComponent,
        PrintFormPlannerConsultComponent,

        /******************************* PRINT MODALS *******************************/
        PrintModalChooseYourRepComponent,
        PrintModalMakeWishListComponent,
        PrintModalWriteAdvanceDirectiveComponent,



        /******************************* SCREEN FORMS *******************************/
        ScreenFormCaregiverConsultComponent,
        ScreenFormPlannerConsultComponent,
        ScreenFormPatientConsultComponent,
        ScreenSubFormCaregiverComponent,
        ScreenSubFormDemographicComponent,
        ScreenSubFormDisclaimerComponent,
        ScreenSubFormFrailityComponent,
        ScreenSubFormMedicalComponent,
        ScreenSubFormPatientComponent,
        ScreenSubFormPlannerComponent,


        ScreenFormMakeWishListOverviewComponent,
        ScreenFormMakeWishListContainerComponent,

        MakeWishesContainerComponent,
        MakeWishesOverviewComponent,
        ScreenFormChooseRepContainerComponent,
        ScreenFormChooseRepOverviewComponent,
        DialogWishListComponent,
        DialogRepsComponent,
        DialogDirectiveComponent,
        ScreenFormWriteDirectiveOverviewComponent,
        ScreenFormWriteDirectiveContainerComponent,
        PrintFooterComponent,
        PrintHeaderComponent,
        DialogHeaderComponent,


       

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
        NgxMaskModule.forRoot(),
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),


    ],
    providers: [DatePipe, Meta],
    exports: [
        GlobalMenuComponent,
        GlobalFooterComponent
    ],
    bootstrap: [AppComponent]
})


export class MyAppModule { }
