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

/************************************************************* GLOBAL FOOTERS **************************************************************/
import { GlobalFooterComponent } from './global-footers/global-footer.component';
import { PrintedFooterComponent } from './global-footers/printed-footer/printed-footer.component';


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
import { CaregiverComponent } from './print-forms/caregiver/caregiver.component';
import { DemographicComponent } from './print-forms/demographic/demographic.component';
import { DisclaimerComponent } from './print-forms/disclaimer/disclaimer.component';
import { FrailityComponent } from './print-forms/fraility/fraility.component';
import { MedicalComponent } from './print-forms/medical/medical.component';
import { PatientComponent } from './print-forms/patient/patient.component';
import { PlanningComponent } from './print-forms/planning/planning.component';

import { PrintCaregiverConsultComponent } from './print-forms/print-caregiver-consult/print-caregiver-consult.component';
import { PrintPatientConsultComponent } from './print-forms/print-patient-consult/print-patient-consult.component';
import { PrintPlanningConsultComponent } from './print-forms/print-planning-consult/print-planning-consult.component';

/************************************************************* PRINT MODALS ***********************************************************/
import { ChooseYourRepWizardPrintoutComponent } from './print-modals/choose-your-rep-wizard-printout/choose-your-rep-wizard-printout.component';
import { MakeWishesWizardPrintoutComponent } from './print-modals/make-wishes-wizard-printout/make-wishes-wizard-printout.component'
import { PrintModalHeadingComponent } from './print-modals/print-modal-heading/print-modal-heading.component';
import { WriteAdvanceDirectiveWizardPrintoutComponent } from './print-modals/write-advance-directive-wizard-printout/write-advance-directive-wizard-printout.component';

/************************************************************* SCREEN FORMS ***********************************************************/
import { CovidComponent } from './screen-forms/covid/covid.component';
import { DemographicInfoComponent } from './screen-forms/demographic-info/demographic-info.component';
import { FrailtyScaleComponent } from './screen-forms/frailty-scale/frailty-scale.component';
import { MedicalHistoryComponent } from './screen-forms/medical-history/medical-history.component';
import { SupportForCaregiverComponent } from './screen-forms/support-for-caregiver/support-for-caregiver.component';
import { SupportForPatientComponent } from './screen-forms/support-for-patient/support-for-patient.component';
import { SupportForPlannerComponent } from './screen-forms/support-for-planner/support-for-planner.component';

/************************************************************* SCREEN MODALS ***********************************************************/
import { ChooseYourRepWizardComponent } from './screen-modals/choose-your-rep-wizard/choose-your-rep-wizard.component';
import { MakeWishesWizardComponent } from './screen-modals/make-wishes-wizard/make-wishes-wizard.component';
import { ScreenModalHeadingComponent } from './screen-modals/screen-modal-heading/screen-modal-heading.component';
import { WriteAdvanceDirectiveWizardComponent } from './screen-modals/write-advance-directive-wizard/write-advance-directive-wizard.component';




@NgModule({
    declarations: [
        AppComponent,

        /******************************* GLOBAL FOOTER *******************************/
        GlobalFooterComponent,
        PrintedFooterComponent,

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
        MakeWishesContainerComponent,
        MakeWishesOverviewComponent,
        /* WRITE ADVANCED DIRECTIVE FOLDER */
        WriteAdvanceDirectiveOverviewComponent,
        WriteAdvanceDirectiveContainerComponent,

        /******************************* PRINT FORMS *******************************/
        CaregiverComponent,
        DemographicComponent,
        DisclaimerComponent,
        FrailityComponent,
        MedicalComponent,
        PatientComponent,
        PlanningComponent,
        PrintCaregiverConsultComponent,
        PrintPatientConsultComponent,
        PrintPlanningConsultComponent,

        /******************************* PRINT MODALS *******************************/
        ChooseYourRepWizardPrintoutComponent,
        MakeWishesWizardPrintoutComponent,
        PrintModalHeadingComponent,
        WriteAdvanceDirectiveWizardPrintoutComponent,

        /******************************* SCREEN FORMS *******************************/
        CovidComponent,
        DemographicInfoComponent,
        FrailtyScaleComponent,
        MedicalHistoryComponent,
        SupportForCaregiverComponent,
        SupportForPatientComponent,
        SupportForPlannerComponent,

        /******************************* SCREEN MODALS *******************************/
        ChooseYourRepWizardComponent,
        MakeWishesWizardComponent,
        ScreenModalHeadingComponent,
        WriteAdvanceDirectiveWizardComponent,





























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
