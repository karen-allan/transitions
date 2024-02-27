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

/* GLOBAL DATA ENTRY */
import { DataEntryCaregiverConsultComponent } from './global-data-entry/data-entry-caregiver-consult/data-entry-caregiver-consult.component';
import { DataEntryPatientConsultComponent } from './global-data-entry/data-entry-patient-consult/data-entry-patient-consult.component';
import { DataEntryPlanningConsultComponent } from './global-data-entry/data-entry-planning-consult/data-entry-planning-consult.component';
import { MenuForConsultationsComponent } from './global-data-entry/menu-for-consultations/menu-for-consultations.component';

/* GLOBAL FOOTER */
import { GlobalFooterComponent } from './global-footer/global-footer.component';

/* GLOBAL FORM SECTIONS */
import { CovidComponent } from './global-forms/covid/covid.component';
import { DemographicInfoComponent } from './global-forms/demographic-info/demographic-info.component';
import { EndOfLifePlanningComponent } from './global-forms/end-of-life-planning/end-of-life-planning.component';
import { FrailtyScaleComponent } from './global-forms/frailty-scale/frailty-scale.component';
import { MedicalHistoryComponent } from './global-forms/medical-history/medical-history.component';
import { SupportForCaregiverComponent } from './global-forms/support-for-caregiver/support-for-caregiver.component';
import { SupportForPatientComponent } from './global-forms/support-for-patient/support-for-patient.component';

/* GLOBAL HEADERS */
import { GlobalHeadersComponent } from './global-headers/global-headers.component';

/* GLOBAL MENU */
import { GlobalMenuComponent } from './global-menu/global-menu.component';

/* GLOBAL PRINT  */
import { PrintCaregiverConsultComponent } from './global-print/print-caregiver-consult/print-caregiver-consult.component';
import { PrintPatientConsultComponent } from './global-print/print-patient-consult/print-patient-consult.component';
import { PrintPlanningConsultComponent } from './global-print/print-planning-consult/print-planning-consult.component';

/* GLOBAL WIZARD */
/* REP NINE WIZARD will be replaced */
import { RepNineWizardContainerComponent } from './global-wizards/rep-nine-wizard/rep-nine-wizard-container/rep-nine-wizard-container.component';
import { RepNineWizardOverviewComponent } from './global-wizards/rep-nine-wizard/rep-nine-wizard-overview/rep-nine-wizard-overview.component';

/* MENU ABOUT FOLDER */

/* ABOUT EOL DOULA FOLDER */
import { AboutEolAdvocacyContainerComponent } from './menu-about/about-eol-advocacy/about-eol-advocacy-container/about-eol-advocacy-container.component';
import { AboutEolAdvocacyOverviewComponent } from './menu-about/about-eol-advocacy/about-eol-advocacy-overview/about-eol-advocacy-overview.component';

import { AboutPractitionerContainerComponent } from './menu-about/about-practitioner/about-practitioner-container/about-practitioner-container.component';
import { AboutPractitionerOverviewComponent } from './menu-about/about-practitioner/about-practitioner-overview/about-practitioner-overview.component';

/* MENU CONSULTATION FOLDER */
/* BOOK CONSULTATION */
import { BookConsultationContainerComponent } from './menu-consultations/book-consultation/book-consultation-container/book-consultation-container.component';
import { BookConsultationOverviewComponent } from './menu-consultations/book-consultation/book-consultation-overview/book-consultation-overview.component';

import { RolesOfConsultantContainerComponent } from './menu-consultations/roles-of-consultant/roles-of-consultant-container/roles-of-consultant-container.component';
import { RolesOfConsultantOverviewComponent } from './menu-consultations/roles-of-consultant/roles-of-consultant-overview/roles-of-consultant-overview.component';

/* MENU HOME FOLDER */
import {HomeContainerComponent} from './menu-home/home-container/home-container.component';
import {HomeOverviewComponent} from './menu-home/home-overview/home-overview.component';

/* MENU PLAN AHEAD FOLDER */

/* CHOOSE YOUR REPRESENTATIVE */
import { ChooseYourRepContainerComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-container/choose-your-rep-container.component';
import { ChooseYourRepOverviewComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-overview/choose-your-rep-overview.component';
import { ChooseYourRepWizardComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-wizard/choose-your-rep-wizard.component';
import { ChooseYourRepWizardHeaderComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-wizard-header/choose-your-rep-wizard-header.component';

/* DOCUMENTS TO SIGN - WILL BE REMOVED */

import { AdvancedCareDocumentComponent } from './menu-plan-ahead/documents-to-sign/advanced-care/advanced-care-document.component';
import { DnrNoCprDocumentComponent } from './menu-plan-ahead/documents-to-sign/dnr-no-cpr/dnr-no-cpr-document.component';
import { DocumentsToSignContainerComponent } from './menu-plan-ahead/documents-to-sign/documents-to-sign-container/documents-to-sign-container.component';
import { DocumentsToSignOverviewComponent } from './menu-plan-ahead/documents-to-sign/documents-to-sign-overview/documents-to-sign-overview.component';
import { EdithDocumentComponent } from './menu-plan-ahead/documents-to-sign/edith/edith-document.component';

/* THINK ABOUT NEEDS */
import { ThinkAboutNeedsContainerComponent } from './menu-plan-ahead/think-about-needs/think-about-needs-container/think-about-needs-container.component';
import { ThinkAboutNeedsOverviewComponent } from './menu-plan-ahead/think-about-needs/think-about-needs-overview/think-about-needs-overview.component';

/* WRITE AN ADVANCED CARE DIRECTIVE */
import { WriteAnAdvancedDirectiveContainerComponent } from './menu-write-plans/write-advanced-directive/write-an-advanced-directive-container/write-an-advanced-directive-container.component';
import { WriteAnAdvancedDirectiveOverviewComponent } from './menu-write-plans/write-advanced-directive/write-an-advanced-directive-overview/write-an-advanced-directive-overview.component';
import { ChooseYourRepPrintoutComponent } from './menu-write-plans/choose-your-rep/choose-your-rep-printout/choose-your-rep-printout.component';
import { ConsiderAdvancedCarePlanContainerComponent } from './menu-plan-ahead/considerAdvancedCarePlan/consider-advanced-care-plan-container/consider-advanced-care-plan-container.component';
import { ConsiderAdvancedCarePlanOverviewComponent } from './menu-plan-ahead/considerAdvancedCarePlan/consider-advanced-care-plan-overview/consider-advanced-care-plan-overview.component';
import { MakeWishesOverviewComponent } from './menu-write-plans/make-wish-list/make-wishes-overview/make-wishes-overview.component';
import { MakeWishesWizardComponent } from './menu-write-plans/make-wish-list/make-wishes-wizard/make-wishes-wizard.component';
import { MakeWishesContainerComponent } from './menu-write-plans/make-wish-list/make-wishes-container/make-wishes-container.component';
import { MakeWishesWizardHeaderComponent } from './menu-write-plans/make-wish-list/make-wishes-wizard-header/make-wishes-wizard-header.component';
import { ConsiderAdvocatesContainerComponent } from './menu-plan-ahead/considerYourAdvocates/consider-advocates-container/consider-advocates-container.component';
import { ConsiderAdvocatesOverviewComponent } from './menu-plan-ahead/considerYourAdvocates/consider-advocates-overview/consider-advocates-overview.component';
import { MakeWishesWizardPrintoutComponent } from './menu-write-plans/make-wish-list/make-wishes-wizard-printout/make-wishes-wizard-printout.component';
import { WriteAnAdvancedDirectiveWizardPrintoutComponent } from './menu-write-plans/write-advanced-directive/write-an-advanced-directive-wizard-printout/write-an-advanced-directive-wizard-printout.component';
import { WriteAnAdvancedDirectiveWizardHeaderComponent } from './menu-write-plans/write-advanced-directive/write-an-advanced-directive-wizard-header/write-an-advanced-directive-wizard-header.component';
import { WriteAnAdvancedDirectiveWizardComponent } from './menu-write-plans/write-advanced-directive/write-an-advanced-directive-wizard/write-an-advanced-directive-wizard.component';

@NgModule({
    declarations: [
        AppComponent,
        /******************************* GLOBALS *******************************/
        GlobalFooterComponent,
        GlobalHeadersComponent,
        GlobalMenuComponent,
        /******************************* MENU ABOUT *******************************/
        /******************************* MENU BOOK *******************************/
        /* BOOK CONSULTATION */
        BookConsultationContainerComponent,
        BookConsultationOverviewComponent,
        /* DATA ENTRY CONSULT */
        DataEntryCaregiverConsultComponent,
        DataEntryPatientConsultComponent,
        DataEntryPlanningConsultComponent,
        /* MENU FOR CONSULTATION */
        MenuForConsultationsComponent,
        /* PRINT CONSULT */
        PrintCaregiverConsultComponent,
        PrintPatientConsultComponent,
        PrintPlanningConsultComponent,
        /* GLOBAL FORM SECTIONS */
        CovidComponent,
        DemographicInfoComponent,
        EndOfLifePlanningComponent,
        FrailtyScaleComponent,
        MedicalHistoryComponent,
        SupportForCaregiverComponent,
        SupportForPatientComponent,
        /******************************* MENU DOULA WORK *******************************/
        /******************************* MENU HOME *******************************/
        HomeContainerComponent,
        HomeOverviewComponent,
        /* MENU WIZARD */
        /* REP 9 WIZARD */
        RepNineWizardContainerComponent,
        RepNineWizardOverviewComponent,
        AdvancedCareDocumentComponent,

        EdithDocumentComponent,
        DnrNoCprDocumentComponent,
        AboutPractitionerContainerComponent,
        AboutPractitionerOverviewComponent,
        AboutEolAdvocacyContainerComponent,
        AboutEolAdvocacyOverviewComponent,
        RolesOfConsultantContainerComponent,
        RolesOfConsultantOverviewComponent,
        DocumentsToSignContainerComponent,
        DocumentsToSignOverviewComponent,
        ChooseYourRepContainerComponent,
        ChooseYourRepOverviewComponent,
        ThinkAboutNeedsContainerComponent,
        ThinkAboutNeedsOverviewComponent,


        ChooseYourRepWizardComponent,

        ChooseYourRepWizardHeaderComponent,
        WriteAnAdvancedDirectiveOverviewComponent,
        WriteAnAdvancedDirectiveContainerComponent,
        ChooseYourRepPrintoutComponent,
        ConsiderAdvancedCarePlanContainerComponent,
        ConsiderAdvancedCarePlanOverviewComponent,
        MakeWishesOverviewComponent,
        MakeWishesWizardComponent,
        MakeWishesContainerComponent,
        MakeWishesWizardHeaderComponent,
        ConsiderAdvocatesContainerComponent,
        ConsiderAdvocatesOverviewComponent,
        MakeWishesWizardPrintoutComponent,
        WriteAnAdvancedDirectiveWizardPrintoutComponent,
        WriteAnAdvancedDirectiveWizardHeaderComponent,
        WriteAnAdvancedDirectiveWizardComponent
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
    bootstrap: [AppComponent]
})


export class MyAppModule { }
