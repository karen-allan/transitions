import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service-files/in-memory-data.service';
import { NgxMaskModule } from 'ngx-mask'


/* GLOBAL FOOTER */
import { GlobalFooterComponent } from './global-footer/global-footer.component';

/* GLOBAL HEADERS */
import { GlobalHeadersComponent } from './global-headers/global-headers.component';

/* GLOBAL MENU */
import { GlobalMenuComponent } from './global-menu/global-menu.component';

/* MENU ABOUT FOLDER */

/* ABOUT EOL DOULA FOLDER */
import { AboutEolAdvocacyContainerComponent } from './menu-about/about-eol-advocacy/about-eol-advocacy-container/about-eol-advocacy-container.component';
import { AboutEolAdvocacyOverviewComponent } from './menu-about/about-eol-advocacy/about-eol-advocacy-overview/about-eol-advocacy-overview.component';

import { AboutPractitionerContainerComponent } from './menu-about/about-practitioner/about-practitioner-container/about-practitioner-container.component';
import { AboutPractitionerOverviewComponent } from './menu-about/about-practitioner/about-practitioner-overview/about-practitioner-overview.component';

/* MENU BOOK FOLDER */
/* BOOK CONSULTATION */
import { BookConsultationContainerComponent } from './menu-consultations/book-consultation/book-consultation-container/book-consultation-container.component';
import { BookConsultationOverviewComponent } from './menu-consultations/book-consultation/book-consultation-overview/book-consultation-overview.component';
/* DATA ENTRY CONSULT */
import { DataEntryCaregiverConsultComponent } from './global-data-entry/data-entry-caregiver-consult/data-entry-caregiver-consult.component';
import { DataEntryPatientConsultComponent } from './global-data-entry/data-entry-patient-consult/data-entry-patient-consult.component';
import { DataEntryPlanningConsultComponent } from './global-data-entry/data-entry-planning-consult/data-entry-planning-consult.component';
import { MenuForConsultationsComponent } from './global-data-entry/menu-for-consultations/menu-for-consultations.component';
/* PRINT CONSULT */
import { PrintCaregiverConsultComponent } from './global-print/print-caregiver-consult/print-caregiver-consult.component';
import { PrintPatientConsultComponent } from './global-print/print-patient-consult/print-patient-consult.component';
import { PrintPlanningConsultComponent } from './global-print/print-planning-consult/print-planning-consult.component';

/* GLOBAL FORM SECTIONS */
import { CovidComponent } from './global-forms/covid/covid.component';
import { DemographicInfoComponent } from './global-forms/demographic-info/demographic-info.component';
import { EndOfLifePlanningComponent } from './global-forms/end-of-life-planning/end-of-life-planning.component';
import { FrailtyScaleComponent } from './global-forms/frailty-scale/frailty-scale.component';
import { MedicalHistoryComponent } from './global-forms/medical-history/medical-history.component';
import { SupportForCaregiverComponent } from './global-forms/support-for-caregiver/support-for-caregiver.component';
import { SupportForPatientComponent } from './global-forms/support-for-patient/support-for-patient.component';

import { RolesOfConsultantContainerComponent } from './menu-consultations/roles-of-consultant/roles-of-consultant-container/roles-of-consultant-container.component';
import { RolesOfConsultantOverviewComponent } from './menu-consultations/roles-of-consultant/roles-of-consultant-overview/roles-of-consultant-overview.component';


/* MENU HOME FOLDER */
import {HomeContainerComponent} from './menu-home/home-container/home-container.component';
import {HomeOverviewComponent} from './menu-home/home-overview/home-overview.component';

/* MENU WIZARD */
/* REP NINE WIZARD */
import { RepNineWizardContainerComponent } from './menu-doula-work/end-of-life-documents/wizard-temps/rep-nine-wizard-container/rep-nine-wizard-container.component';
import { RepNineWizardOverviewComponent } from './menu-doula-work/end-of-life-documents/wizard-temps/rep-nine-wizard-overview/rep-nine-wizard-overview.component';
/* TSDM WIZARD */
import { TsdmWizardContainerComponent } from './menu-doula-work/end-of-life-documents/wizard-temps/tsdm-wizard-container/tsdm-wizard-container.component';
import { TsdmWizardOverviewComponent } from './menu-doula-work/end-of-life-documents/wizard-temps/tsdm-wizard-overview/tsdm-wizard-overview.component';

import { EndOfLifeDocumentsContainerComponent } from './menu-doula-work/end-of-life-documents/end-of-life-documents-container/end-of-life-documents-container.component';
import { EndOfLifeDocumentsOverviewComponent } from './menu-doula-work/end-of-life-documents/end-of-life-documents-overview/end-of-life-documents-overview.component';
import { AdvancedCareDocumentComponent } from './menu-doula-work/end-of-life-documents/documents/advanced-care-document/advanced-care-document.component';
import { RepNineDocumentComponent } from './menu-doula-work/end-of-life-documents/documents/rep-nine-document/rep-nine-document.component';
import { EdithDocumentComponent } from './menu-doula-work/end-of-life-documents/documents/edith-document/edith-document.component';
import { DnrNoCprDocumentComponent } from './menu-doula-work/end-of-life-documents/documents/dnr-no-cpr-document/dnr-no-cpr-document.component';

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
        /* TSDM WIZARD */
        TsdmWizardContainerComponent,
        TsdmWizardOverviewComponent,





        EndOfLifeDocumentsContainerComponent,
        EndOfLifeDocumentsOverviewComponent,
        AdvancedCareDocumentComponent,
        RepNineDocumentComponent,
        EdithDocumentComponent,
        DnrNoCprDocumentComponent,
        AboutPractitionerContainerComponent,
        AboutPractitionerOverviewComponent,
        AboutEolAdvocacyContainerComponent,
        AboutEolAdvocacyOverviewComponent,
        RolesOfConsultantContainerComponent,
        RolesOfConsultantOverviewComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
      HttpClientModule,
      NgxMaskModule.forRoot(),
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
      )

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})



export class AppModule {
   /* constructor(router: Router, viewportScroller: ViewportScroller) {
        //viewportScroller.setOffset([0, 50]);
        router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: Scroll) => {
            if (e.anchor) {
                // anchor navigation
                /!* setTimeout is the core line to solve the solution *!/
                setTimeout(() => {
                    viewportScroller.scrollToAnchor(e.anchor);
                })
            } else if (e.position) {
                // backward navigation
                viewportScroller.scrollToPosition(e.position);
            } else {
                // forward navigation
                viewportScroller.scrollToPosition([0, 0]);
            }
        });
    }*/
}
