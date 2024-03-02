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


/*ng generate component write-advance-directive-wizard-printout --standalone false */

/************************************************************* GLOBAL DATA ENTRY **********************************************************/
import { DataEntryCaregiverConsultComponent } from './global-data-entry/data-entry-caregiver-consult/data-entry-caregiver-consult.component';
import { DataEntryPatientConsultComponent } from './global-data-entry/data-entry-patient-consult/data-entry-patient-consult.component';
import { DataEntryPlanningConsultComponent } from './global-data-entry/data-entry-planning-consult/data-entry-planning-consult.component';
import { MenuForConsultationsComponent } from './global-data-entry/menu-for-consultations/menu-for-consultations.component';

/************************************************************* GLOBAL FOOTER **************************************************************/
import { GlobalFooterComponent } from './global-footer/global-footer.component';

/************************************************************* GLOBAL FORMS ***************************************************************/
import { CovidComponent } from './global-forms/covid/covid.component';
import { DemographicInfoComponent } from './global-forms/demographic-info/demographic-info.component';
import { EndOfLifePlanningComponent } from './global-forms/end-of-life-planning/end-of-life-planning.component';
import { FrailtyScaleComponent } from './global-forms/frailty-scale/frailty-scale.component';
import { MedicalHistoryComponent } from './global-forms/medical-history/medical-history.component';
import { SupportForCaregiverComponent } from './global-forms/support-for-caregiver/support-for-caregiver.component';
import { SupportForPatientComponent } from './global-forms/support-for-patient/support-for-patient.component';

/************************************************************* GLOBAL HEADERS *************************************************************/
import { GlobalHeadersComponent } from './global-headers/global-headers.component';

/************************************************************* GLOBAL MENU ****************************************************************/
import { GlobalMenuComponent } from './global-menu/global-menu.component';

/************************************************************* GLOBAL PRINT  **************************************************************/
import { PrintCaregiverConsultComponent } from './global-print/print-caregiver-consult/print-caregiver-consult.component';
import { PrintPatientConsultComponent } from './global-print/print-patient-consult/print-patient-consult.component';
import { PrintPlanningConsultComponent } from './global-print/print-planning-consult/print-planning-consult.component';

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

/** ROLES OF CONSULTANT FOLDER **/
import { RolesOfConsultantContainerComponent } from './menu-consultations/roles-of-consultant/roles-of-consultant-container/roles-of-consultant-container.component';
import { RolesOfConsultantOverviewComponent } from './menu-consultations/roles-of-consultant/roles-of-consultant-overview/roles-of-consultant-overview.component';

/************************************************************* MENU HOME ******************************************************************/
import {HomeContainerComponent} from './menu-home/home-container/home-container.component';
import {HomeOverviewComponent} from './menu-home/home-overview/home-overview.component';

/************************************************************* MENU PLAN AHEAD ************************************************************/
/** CONSIDER ADVANCE CARE PLAN FOLDER **/
import { ConsiderAdvanceCarePlanContainerComponent } from './menu-plan-ahead/consider-advance-care-plan/consider-advance-care-plan-container/consider-advance-care-plan-container.component';
import { ConsiderAdvanceCarePlanOverviewComponent } from './menu-plan-ahead/consider-advance-care-plan/consider-advance-care-plan-overview/consider-advance-care-plan-overview.component';

/** CONSIDER YOUR ADVOCATES FOLDER **/
import { ConsiderAdvocatesContainerComponent } from './menu-plan-ahead/considerYourAdvocates/consider-advocates-container/consider-advocates-container.component';
import { ConsiderAdvocatesOverviewComponent } from './menu-plan-ahead/considerYourAdvocates/consider-advocates-overview/consider-advocates-overview.component';

/** CONSIDER CPR DIRECTIVE FOLDER **/
import { ConsiderCprDirectiveContainerComponent } from './menu-plan-ahead/consider-cpr/consider-cpr-directive-container/consider-cpr-directive-container.component';
import { ConsiderCprDirectiveOverviewComponent } from './menu-plan-ahead/consider-cpr/consider-cpr-directive-overview/consider-cpr-directive-overview.component';

/** CONSIDER EDITH DIRECTIVE FOLDER **/
import { ConsiderEdithDirectiveContainerComponent } from './menu-plan-ahead/consider-edith/consider-edith-directive-container/consider-edith-directive-container.component';
import { ConsiderEdithDirectiveOverviewComponent } from './menu-plan-ahead/consider-edith/consider-edith-directive-overview/consider-edith-directive-overview.component';

/** THINK ABOUT NEEDS FOLDER **/
import { ThinkAboutNeedsContainerComponent } from './menu-plan-ahead/think-about-needs/think-about-needs-container/think-about-needs-container.component';
import { ThinkAboutNeedsOverviewComponent } from './menu-plan-ahead/think-about-needs/think-about-needs-overview/think-about-needs-overview.component';

/************************************************************* MENU WRITE PLANS ***********************************************************/
/** CHANGE YOUR REP FOLDER **/
import { ChangeYourRepContainerComponent } from './menu-write-plans/change-your-rep/change-your-rep-container/change-your-rep-container.component';
import { ChangeYourRepOverviewComponent } from './menu-write-plans/change-your-rep/change-your-rep-overview/change-your-rep-overview.component';
import { ChangeYourRepWizardComponent } from './menu-write-plans/change-your-rep/change-your-rep-wizard/change-your-rep-wizard.component';
import { ChangeYourRepWizardHeaderComponent } from './menu-write-plans/change-your-rep/change-your-rep-wizard-header/change-your-rep-wizard-header.component';
import { ChangeYourRepWizardPrintoutComponent } from './menu-write-plans/change-your-rep/change-your-rep-wizard-printout/change-your-rep-wizard-printout.component';

/** CHECK OFF TASKS LIST FOLDER **/
import { CheckOffTasksListContainerComponent } from './menu-write-plans/check-off-tasks-list/check-off-tasks-list-container/check-off-tasks-list-container.component';
import { CheckOffTasksListOverviewComponent } from './menu-write-plans/check-off-tasks-list/check-off-tasks-list-overview/check-off-tasks-list-overview.component';

/** CHOOSE YOUR REP FOLDER **/
import { ChooseYourRepContainerComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-container/choose-your-rep-container.component';
import { ChooseYourRepOverviewComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-overview/choose-your-rep-overview.component';
import { ChooseYourRepWizardComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-wizard/choose-your-rep-wizard.component';
import { ChooseYourRepWizardHeaderComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-wizard-header/choose-your-rep-wizard-header.component';
import { ChooseYourRepWizardPrintoutComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-wizard-printout/choose-your-rep-wizard-printout.component';

/** MAKE WISH LIST FOLDER **/
import { MakeWishesContainerComponent } from './menu-write-plans/make-wish-list/make-wishes-container/make-wishes-container.component';
import { MakeWishesOverviewComponent } from './menu-write-plans/make-wish-list/make-wishes-overview/make-wishes-overview.component';
import { MakeWishesWizardComponent } from './menu-write-plans/make-wish-list/make-wishes-wizard/make-wishes-wizard.component';
import { MakeWishesWizardHeaderComponent } from './menu-write-plans/make-wish-list/make-wishes-wizard-header/make-wishes-wizard-header.component';
import { MakeWishesWizardPrintoutComponent } from './menu-write-plans/make-wish-list/make-wishes-wizard-printout/make-wishes-wizard-printout.component';

/** WRITE AN ADVANCE CARE DIRECTIVE FOLDER **/
import { WriteAdvanceDirectiveOverviewComponent } from './menu-write-plans/write-advance-directive/write-advance-directive-overview/write-advance-directive-overview.component';
import { WriteAdvanceDirectiveContainerComponent } from './menu-write-plans/write-advance-directive/write-advance-directive-container/write-advance-directive-container.component';
import { WriteAdvanceDirectiveWizardComponent } from './menu-write-plans/write-advance-directive/write-advance-directive-wizard/write-advance-directive-wizard.component';
import { WriteAdvanceDirectiveWizardHeaderComponent } from './menu-write-plans/write-advance-directive/write-advance-directive-wizard-header/write-advance-directive-wizard-header.component';
import { WriteAdvanceDirectiveWizardPrintoutComponent } from './menu-write-plans/write-advance-directive/write-advance-directive-wizard-printout/write-advance-directive-wizard-printout.component';

@NgModule({
    declarations: [
        AppComponent,

        /******************************* GLOBAL DATA ENTRY *******************************/
        DataEntryCaregiverConsultComponent,
        DataEntryPatientConsultComponent,
        DataEntryPlanningConsultComponent,
        MenuForConsultationsComponent,

        /******************************* GLOBAL FOOTER *******************************/
        GlobalFooterComponent,

        /******************************* GLOBAL FORMS *******************************/
        CovidComponent,
        DemographicInfoComponent,
        EndOfLifePlanningComponent,
        FrailtyScaleComponent,
        MedicalHistoryComponent,
        SupportForCaregiverComponent,
        SupportForPatientComponent,

        /******************************* GLOBAL HEADERS *******************************/
        GlobalHeadersComponent,

        /******************************* GLOBAL MENU *******************************/
        GlobalMenuComponent,

        /******************************* GLOBAL PRINT *******************************/
        PrintCaregiverConsultComponent,
        PrintPatientConsultComponent,
        PrintPlanningConsultComponent,

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

        /* ROLES OF CONSULTANT */
        RolesOfConsultantContainerComponent,
        RolesOfConsultantOverviewComponent,

        /******************************* MENU HOME *******************************/
        HomeContainerComponent,
        HomeOverviewComponent,

        /****************************** MENU PLAN AHEAD ************************/
        /* CONSIDER ADVANCE CARE PLAN FOLDER */
        ConsiderAdvanceCarePlanContainerComponent,
        ConsiderAdvanceCarePlanOverviewComponent,

        /* CONSIDER YOUR ADVOCATES FOLDER */
        ConsiderAdvocatesContainerComponent,
        ConsiderAdvocatesOverviewComponent,

        /* THINK ABOUT NEEDS FOLDER */
        ThinkAboutNeedsContainerComponent,
        ThinkAboutNeedsOverviewComponent,

        /* CONSIDER CPR FOLDER */
        ConsiderCprDirectiveContainerComponent,
        ConsiderCprDirectiveOverviewComponent,

        /* CONSIDER EDITH FOLDER */
        ConsiderEdithDirectiveContainerComponent,
        ConsiderEdithDirectiveOverviewComponent,

        /****************************** MENU WRITE PLANS ************************/


        /* CHANGE YOUR REP FOLDER */
        ChangeYourRepContainerComponent,
        ChangeYourRepOverviewComponent,
        ChangeYourRepWizardComponent,
        ChangeYourRepWizardHeaderComponent,
        ChangeYourRepWizardPrintoutComponent,

        /* CHECK OFF TASKS LIST FOLDER */
        CheckOffTasksListContainerComponent,
        CheckOffTasksListOverviewComponent,

        /* CHOOSE YOUR REP FOLDER */
        ChooseYourRepContainerComponent,
        ChooseYourRepOverviewComponent,
        ChooseYourRepWizardComponent,
        ChooseYourRepWizardHeaderComponent,
        ChooseYourRepWizardPrintoutComponent,

        /* MAKE WISH LIST FOLDER */
        MakeWishesContainerComponent,
        MakeWishesOverviewComponent,
        MakeWishesWizardComponent,
        MakeWishesWizardHeaderComponent,
        MakeWishesWizardPrintoutComponent,

        /* WRITE ADVANCED DIRECTIVE FOLDER */
        WriteAdvanceDirectiveOverviewComponent,
        WriteAdvanceDirectiveContainerComponent,
        WriteAdvanceDirectiveWizardComponent,
        WriteAdvanceDirectiveWizardHeaderComponent,
        WriteAdvanceDirectiveWizardPrintoutComponent,



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
        GlobalHeadersComponent,
        GlobalFooterComponent
    ],
    bootstrap: [AppComponent]
})


export class MyAppModule { }
