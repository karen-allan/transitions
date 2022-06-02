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

/* GLOBAL FORMS */
/* REPRESENTATIVE NINE */
import { RepNineFinalComponent } from './menu-wizard/rep-nine/rep-nine-final/rep-nine-final.component';

/* GLOBAL GRIDS */
import { GlobalGridsComponent } from './global-grids/global-grids.component';

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

/* BOOK ENERGY SESSION */
import { BookSessionContainerComponent } from './menu-book/book-session/book-session-container/book-session-container.component';
import { BookSessionOverviewComponent } from './menu-book/book-session/book-session-overview/book-session-overview.component';
import { DataEntryEnergySessionComponent } from './menu-book/book-session/data-entry-energy-session/data-entry-energy-session.component';
import { PrintEnergySessionComponent } from './menu-book/book-session/print-energy-session/print-energy-session.component';

/* GLOBAL FORM SECTIONS */
import { CovidComponent } from './menu-book/global-form-sections/covid/covid.component';
import { DemographicInfoComponent } from './menu-book/global-form-sections/demographic-info/demographic-info.component';
import { EndOfLifePlanningComponent } from './menu-book/global-form-sections/end-of-life-planning/end-of-life-planning.component';
import { FrailtyScaleComponent } from './menu-book/global-form-sections/frailty-scale/frailty-scale.component';
import { MedicalHistoryComponent } from './menu-book/global-form-sections/medical-history/medical-history.component';
import { SessionConsiderationsComponent } from './menu-book/global-form-sections/session-considerations/session-considerations.component';
import { SessionGoalsComponent} from "./menu-book/global-form-sections/session-goals/session-goals.component";
import { SupportForCaregiverComponent } from './menu-book/global-form-sections/support-for-caregiver/support-for-caregiver.component';
import { SupportForPatientComponent } from './menu-book/global-form-sections/support-for-patient/support-for-patient.component';




/* MENU DOULA WORK */
/* CARE FOR PATIENTS */
import { CareForPatientsOverviewComponent } from './menu-doula-work/care-for-patients/care-for-patients-overview/care-for-patients-overview.component';
import { CareForPatientsContainerComponent } from './menu-doula-work/care-for-patients/care-for-patients-container/care-for-patients-container.component';

/* CHOOSE MEMORIAL */
import { ChooseMemorialContainerComponent } from './menu-doula-work/choose-memorial/choose-memorial-container/choose-memorial-container.component';
import { ChooseMemorialOverviewComponent } from './menu-doula-work/choose-memorial/choose-memorial-overview/choose-memorial-overview.component';

/* CHOOSE REPRESENTATIVE */
import { ChooseRepresentativeContainerComponent } from './menu-doula-work/choose-representative/choose-representative-container/choose-representative-container.component';
import { ChooseRepresentativeOverviewComponent } from './menu-doula-work/choose-representative/choose-representative-overview/choose-representative-overview.component';

/* CREATE LEGACY */
import { CreateLegacyContainerComponent } from './menu-doula-work/create-legacy/create-legacy-container/create-legacy-container.component';
import { CreateLegacyOverviewComponent } from './menu-doula-work/create-legacy/create-legacy-overview/create-legacy-overview.component';

/* PLAN AHEAD */
import { PlanAheadContainerComponent } from './menu-doula-work/plan-ahead/plan-ahead-container/plan-ahead-container.component';
import { PlanAheadOverviewComponent } from './menu-doula-work/plan-ahead/plan-ahead-overview/plan-ahead-overview.component';

/* SUPPORT CAREGIVERS */
import { SupportCaregiversOverviewComponent } from './menu-doula-work/supportCaregivers/support-caregivers-overview/support-caregivers-overview.component';
import { SupportCaregiversContainerComponent } from './menu-doula-work/supportCaregivers/support-caregivers-container/support-caregivers-container.component';

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

/* FAQ */
import { FaqContainerComponent } from './menu-faq/faq-container/faq-container.component';
import { FaqOverviewComponent } from './menu-faq/faq-overview/faq-overview.component';

/* MENU HOME FOLDER */
import {HomeContainerComponent} from './menu-home/home-container/home-container.component';
import {HomeOverviewComponent} from './menu-home/home-overview/home-overview.component';

/* MENU WIZARD FOLDER */
/* ACP */
import { AcpWizardContainerComponent } from './menu-wizard/acp/acp-wizard-container/acp-wizard-container.component';
import { AcpWizardOverviewComponent } from './menu-wizard/acp/acp-wizard-overview/acp-wizard-overview.component';

/* DNR */
import { DnrWizardContainerComponent } from './menu-wizard/dnr/dnr-wizard-container/dnr-wizard-container.component';
import { DnrWizardOverviewComponent } from './menu-wizard/dnr/dnr-wizard-overview/dnr-wizard-overview.component';

/* EDITH */
import { EdithWizardOverviewComponent } from './menu-wizard/edith/edith-wizard-overview/edith-wizard-overview.component';
import { EdithWizardContainerComponent } from './menu-wizard/edith/edith-wizard-container/edith-wizard-container.component';

/* REP NINE */
import { RepNineWizardContainerComponent } from './menu-wizard/rep-nine/rep-nine-wizard-container/rep-nine-wizard-container.component';
import { RepNineWizardOverviewComponent } from './menu-wizard/rep-nine/rep-nine-wizard-overview/rep-nine-wizard-overview.component';

/* TRANSFER */
import { TransferWizardContainerComponent } from './menu-wizard/transfer/transfer-wizard-container/transfer-wizard-container.component';
import { TransferWizardOverviewComponent } from './menu-wizard/transfer/transfer-wizard-overview/transfer-wizard-overview.component';

/* TSDM */
import { TsdmWizardContainerComponent } from './menu-wizard/tsdm/tsdm-wizard-container/tsdm-wizard-container.component';
import { TsdmWizardOverviewComponent } from './menu-wizard/tsdm/tsdm-wizard-overview/tsdm-wizard-overview.component';

import { WizardContainerComponent } from './menu-wizard/wizard-container/wizard-container.component';
import { WizardOverviewComponent } from './menu-wizard/wizard-overview/wizard-overview.component';











@NgModule({
    declarations: [
        AppComponent,

        /* GLOBALS */
        GlobalFooterComponent,

        /* GLOBAL FORMS */
        /* CONSULTATIONS */


        CovidComponent,

        /* SESSIONS */



        GlobalGridsComponent,
        GlobalHeadersComponent,
        GlobalMenuComponent,
        /* GLOBAL PRINT */

        /* MENU ABOUT */
        AboutEolDoulaContainerComponent,
        AboutEolDoulaOverviewComponent,
        AboutMeContainerComponent,
        AboutMeOverviewComponent,
        AboutEnergyPractContainerComponent,
        AboutEnergyPractOverviewComponent,

        /* MENU BOOK */

        BookSessionContainerComponent,
        BookSessionOverviewComponent,

        /* MENU DOULA WORK */

        /* MENU ENERGY MEDICINE */
        ElementWheelComponent,
        SelectedElementComponent,

        MeridianTracingVideosComponent,
        MeridianWheelComponent,
        SelectedMeridianComponent,


        /* FAQ */
        FaqContainerComponent,
        FaqOverviewComponent,

        /* HOME */
        HomeContainerComponent,
        HomeOverviewComponent,
        PlanAheadContainerComponent,
        PlanAheadOverviewComponent,
        DoEnergyExercisesOverviewComponent,
        DoEnergyExercisesContainerComponent,
        SupportCaregiversOverviewComponent,
        SupportCaregiversContainerComponent,
        ChooseRepresentativeContainerComponent,
        ChooseRepresentativeOverviewComponent,


        CreateLegacyContainerComponent,
        CreateLegacyOverviewComponent,
        CareForPatientsOverviewComponent,
        CareForPatientsContainerComponent,
        DiscoverElementContainerComponent,
        DiscoverElementOverviewComponent,

        ReduceAnxietyOverviewComponent,
        ReduceAnxietyContainerComponent,
        RelieveBurnoutContainerComponent,
        RelieveBurnoutOverviewComponent,

        BookConsultationContainerComponent,
        BookConsultationOverviewComponent,
        DecreasePainOverviewComponent,
        DecreasePainContainerComponent,
        TraceMeridiansContainerComponent,
        TraceMeridiansOverviewComponent,
        ChooseMemorialContainerComponent,
        ChooseMemorialOverviewComponent,

        WizardContainerComponent,
        WizardOverviewComponent,
        TsdmWizardOverviewComponent,
        TsdmWizardContainerComponent,
        RepNineWizardContainerComponent,
        RepNineWizardOverviewComponent,
        DnrWizardOverviewComponent,

        DnrWizardContainerComponent,
          EdithWizardOverviewComponent,
          EdithWizardContainerComponent,
          AcpWizardContainerComponent,
          AcpWizardOverviewComponent,
          TransferWizardOverviewComponent,
          TransferWizardContainerComponent,
          RepNineFinalComponent,

          MedicalHistoryComponent,
          DemographicInfoComponent,
        SessionGoalsComponent,
        EndOfLifePlanningComponent,
        SupportForCaregiverComponent,
        SupportForPatientComponent,

          MenuForConsultationsComponent,

          FrailtyScaleComponent,
          SessionConsiderationsComponent,


          DataEntryCaregiverConsultComponent,
          DataEntryPatientConsultComponent,
          DataEntryPlanningConsultComponent,
          DataEntryEnergySessionComponent,
          PrintCaregiverConsultComponent,
          PrintPatientConsultComponent,
          PrintPlanningConsultComponent,
          PrintEnergySessionComponent,



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
