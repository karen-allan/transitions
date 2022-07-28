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
import {Router, Scroll} from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import {filter} from "rxjs";

/* GLOBAL FOOTER */
import { GlobalFooterComponent } from './global-footer/global-footer.component';

/* GLOBAL HEADERS */
import { GlobalHeadersComponent } from './global-headers/global-headers.component';

/* GLOBAL MENU */
import { GlobalMenuComponent } from './global-menu/global-menu.component';

/* MENU ABOUT FOLDER */
/* ABOUT ENERGY PRACTITIONER FOLDER */
import {AboutEnergyPractContainerComponent} from './menu-about/about-energy-practitioner/about-energy-pract-container/about-energy-pract-container.component';
import {AboutEnergyPractOverviewComponent} from './menu-about/about-energy-practitioner/about-energy-pract-overview/about-energy-pract-overview.component';
/* ABOUT EOL DOULA FOLDER */
import {AboutEolDoulaContainerComponent} from './menu-about/about-eol-doula/about-eol-doula-container/about-eol-doula-container.component';
import {AboutEolDoulaOverviewComponent} from './menu-about/about-eol-doula/about-eol-doula-overview/about-eol-doula-overview.component';
/* ABOUT ME FOLDER */
import { AboutMeContainerComponent } from './menu-about/about-me/about-me-container/about-me-container.component';
import { AboutMeOverviewComponent } from './menu-about/about-me/about-me-overview/about-me-overview.component';

/* MENU BOOK FOLDER */
/* BOOK CONSULTATION */
import { BookConsultationContainerComponent } from './menu-book/book-consultation/book-consultation-container/book-consultation-container.component';
import { BookConsultationOverviewComponent } from './menu-book/book-consultation/book-consultation-overview/book-consultation-overview.component';
/* DATA ENTRY CONSULT */
import { DataEntryCaregiverConsultComponent } from './menu-book/book-consultation/data-entry-consult/data-entry-caregiver-consult/data-entry-caregiver-consult.component';
import { DataEntryPatientConsultComponent } from './menu-book/book-consultation/data-entry-consult/data-entry-patient-consult/data-entry-patient-consult.component';
import { DataEntryPlanningConsultComponent } from './menu-book/book-consultation/data-entry-consult/data-entry-planning-consult/data-entry-planning-consult.component';
import { MenuForConsultationsComponent } from './menu-book/book-consultation/menu-for-consultations/menu-for-consultations.component';
/* PRINT CONSULT */
import { PrintCaregiverConsultComponent } from './menu-book/book-consultation/print-consult/print-caregiver-consult/print-caregiver-consult.component';
import { PrintPatientConsultComponent } from './menu-book/book-consultation/print-consult/print-patient-consult/print-patient-consult.component';
import { PrintPlanningConsultComponent } from './menu-book/book-consultation/print-consult/print-planning-consult/print-planning-consult.component';

/* BOOK SESSION */
import { BookSessionContainerComponent } from './menu-book/book-session/book-session-container/book-session-container.component';
import { BookSessionOverviewComponent } from './menu-book/book-session/book-session-overview/book-session-overview.component';
import { DataEntryEnergySessionComponent } from './menu-book/book-session/data-entry-energy-session/data-entry-energy-session.component';
import { PrintEnergySessionComponent } from './menu-book/book-session/print-energy-session/print-energy-session.component';

/* GLOBAL FORM SECTIONS */
import { CovidComponent } from './global-form-sections/covid/covid.component';
import { DemographicInfoComponent } from './global-form-sections/demographic-info/demographic-info.component';
import { EndOfLifePlanningComponent } from './global-form-sections/end-of-life-planning/end-of-life-planning.component';
import { FrailtyScaleComponent } from './global-form-sections/frailty-scale/frailty-scale.component';
import { MedicalHistoryComponent } from './global-form-sections/medical-history/medical-history.component';
import { SessionConsiderationsComponent } from './global-form-sections/session-considerations/session-considerations.component';
import { SessionGoalsComponent} from "./global-form-sections/session-goals/session-goals.component";
import { SupportForCaregiverComponent } from './global-form-sections/support-for-caregiver/support-for-caregiver.component';
import { SupportForPatientComponent } from './global-form-sections/support-for-patient/support-for-patient.component';

/* MENU DOULA WORK */
/*  */

/* CHOOSE MEMORIAL */
import { ChooseMemorialContainerComponent } from './menu-doula-work/choose-memorial/choose-memorial-container/choose-memorial-container.component';
import { ChooseMemorialOverviewComponent } from './menu-doula-work/choose-memorial/choose-memorial-overview/choose-memorial-overview.component';
/* CREATE LEGACY */
import { CreateLegacyContainerComponent } from './menu-doula-work/create-legacy/create-legacy-container/create-legacy-container.component';
import { CreateLegacyOverviewComponent } from './menu-doula-work/create-legacy/create-legacy-overview/create-legacy-overview.component';
/*  */

/* MENU ENERGY MEDICINE */
/* DECREASE PAIN */
import { DecreasePainOverviewComponent } from './menu-energy-medicine/decrease-pain/decrease-pain-overview/decrease-pain-overview.component';
import { DecreasePainContainerComponent } from './menu-energy-medicine/decrease-pain/decrease-pain-container/decrease-pain-container.component';
/* DISCOVER ELEMENT FOLDER */
import { DiscoverElementContainerComponent } from './menu-energy-medicine/discover-element/discover-element-container/discover-element-container.component';
import { DiscoverElementOverviewComponent } from './menu-energy-medicine/discover-element/discover-element-overview/discover-element-overview.component';
import {ElementWheelComponent} from './menu-energy-medicine/discover-element/element-wheel/element-wheel.component';
import {SelectedElementComponent } from './menu-energy-medicine/discover-element/selected-element/selected-element.component';
/* DO ENERGY EXERCISES */
import { DoEnergyExercisesOverviewComponent } from './menu-energy-medicine/do-energy-exercises/do-energy-exercises-overview/do-energy-exercises-overview.component';
import { DoEnergyExercisesContainerComponent } from './menu-energy-medicine/do-energy-exercises/do-energy-exercises-container/do-energy-exercises-container.component';
/* REDUCE ANXIETY */
import { ReduceAnxietyOverviewComponent } from './menu-energy-medicine/reduce-anxiety/reduce-anxiety-overview/reduce-anxiety-overview.component';
import { ReduceAnxietyContainerComponent } from './menu-energy-medicine/reduce-anxiety/reduce-anxiety-container/reduce-anxiety-container.component';
/* RELIEVE BURNOUT */
import { RelieveBurnoutContainerComponent } from './menu-energy-medicine/relieve-burnout/relieve-burnout-container/relieve-burnout-container.component';
import { RelieveBurnoutOverviewComponent } from './menu-energy-medicine/relieve-burnout/relieve-burnout-overview/relieve-burnout-overview.component';
/* TRACE MERIDIANS */
import {MeridianTracingVideosComponent } from './menu-energy-medicine/trace-meridians/meridian-tracing-videos/meridian-tracing-videos.component';
import {MeridianWheelComponent } from './menu-energy-medicine/trace-meridians/meridian-wheel/meridian-wheel.component';
import {SelectedMeridianComponent } from './menu-energy-medicine/trace-meridians/selected-meridian/selected-meridian.component';
import { TraceMeridiansContainerComponent } from './menu-energy-medicine/trace-meridians/trace-meridians-container/trace-meridians-container.component';
import { TraceMeridiansOverviewComponent } from './menu-energy-medicine/trace-meridians/trace-meridians-overview/trace-meridians-overview.component';

/* MENU EOL DOCS */
/* ACP */

/* DNR */

/* EDITH */

/*  */

/* REP SECTION NINE */

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

import { EndOfLifePlanningOverviewComponent } from './menu-doula-work/end-of-life-planning/end-of-life-planning-overview/end-of-life-planning-overview.component';
import { EndOfLifePlanningContainerComponent } from './menu-doula-work/end-of-life-planning/end-of-life-planning-container/end-of-life-planning-container.component';
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
        AboutEnergyPractContainerComponent,
        AboutEnergyPractOverviewComponent,

        AboutEolDoulaContainerComponent,
        AboutEolDoulaOverviewComponent,

        AboutMeContainerComponent,
        AboutMeOverviewComponent,

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

        /* BOOK SESSION */
        BookSessionContainerComponent,
        BookSessionOverviewComponent,
        /* DATA ENTRY SESSION */
        DataEntryEnergySessionComponent,
        /* PRINT ENERGY SESSION */
        PrintEnergySessionComponent,

        /* GLOBAL FORM SECTIONS */
        CovidComponent,
        DemographicInfoComponent,
        EndOfLifePlanningComponent,
        FrailtyScaleComponent,
        MedicalHistoryComponent,
        SessionConsiderationsComponent,
        SessionGoalsComponent,
        SupportForCaregiverComponent,
        SupportForPatientComponent,

        /******************************* MENU DOULA WORK *******************************/
        /* CARE FOR PATIENTS */

        /* CHOOSE MEMORIAL */
        ChooseMemorialContainerComponent,
        ChooseMemorialOverviewComponent,
        /* CREATE LEGACY */
        CreateLegacyContainerComponent,
        CreateLegacyOverviewComponent,
        /* SUPPORT CAREGIVERS */


        /******************************* MENU ENERGY MEDICINE *******************************/
        /* DECREASE PAIN */
        DecreasePainContainerComponent,
        DecreasePainOverviewComponent,
        /* DISCOVER ELEMENT */
        DiscoverElementContainerComponent,
        DiscoverElementOverviewComponent,
        ElementWheelComponent,
        SelectedElementComponent,
        /* DO ENERGY EXERCISES */
        DoEnergyExercisesContainerComponent,
        DoEnergyExercisesOverviewComponent,
        /* REDUCE ANXIETY */
        ReduceAnxietyContainerComponent,
        ReduceAnxietyOverviewComponent,
        /* RELIEVE BURNOUT */
        RelieveBurnoutContainerComponent,
        RelieveBurnoutOverviewComponent,
        /* TRACE MERIDIANS */
        MeridianTracingVideosComponent,
        MeridianWheelComponent,
        SelectedMeridianComponent,
        TraceMeridiansContainerComponent,
        TraceMeridiansOverviewComponent,

        /******************************* MENU EOL DOCS *******************************/
        /* ACP */

        /* DNR */


        /* EDITH */


        /* FRAILTY MENU */

        /* REP SECTION NINE */




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





        EndOfLifePlanningOverviewComponent,
        EndOfLifePlanningContainerComponent,
        EndOfLifeDocumentsContainerComponent,
        EndOfLifeDocumentsOverviewComponent,
        AdvancedCareDocumentComponent,
        RepNineDocumentComponent,
        EdithDocumentComponent,
        DnrNoCprDocumentComponent,

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
    constructor(router: Router, viewportScroller: ViewportScroller) {
        //viewportScroller.setOffset([0, 50]);
        router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: Scroll) => {
            if (e.anchor) {
                // anchor navigation
                /* setTimeout is the core line to solve the solution */
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
    }
}
