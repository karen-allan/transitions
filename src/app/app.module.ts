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
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { RouterModule, Routes } from '@angular/router';

/* GLOBAL FOOTER */
import { GlobalFooterComponent } from './global-footer/global-footer.component';

/* GLOBAL FORMS */
/* CONSULTATIONS */




/* CURRENTLY, NOT IN USE */
import { CovidComponent } from './global-forms/covid/covid.component';

/* SESSIONS */

/* GLOBAL GRIDS */
import { GlobalGridsComponent } from './global-grids/global-grids.component';

/* GLOBAL HEADERS */
import { GlobalHeadersComponent } from './global-headers/global-headers.component';

/* GLOBAL MENU */
import { GlobalMenuComponent } from './global-menu/global-menu.component';

/* GLOBAL PRINT */
import { PrintSessionComponent } from './menu-book/book-session/print-session/print-session.component';

/* MENU ABOUT FOLDER */
/* ABOUT DOULA FOLDER */
import {AboutEolDoulaContainerComponent} from './menu-about/about-eol-doula/about-eol-doula-container/about-eol-doula-container.component';
import {AboutEolDoulaOverviewComponent} from './menu-about/about-eol-doula/about-eol-doula-overview/about-eol-doula-overview.component';

/* ABOUT ME FOLDER */
import { AboutMeContainerComponent } from './menu-about/about-me/about-me-container/about-me-container.component';
import { AboutMeOverviewComponent } from './menu-about/about-me/about-me-overview/about-me-overview.component';

/* ABOUT PRACTITIONER FOLDER */
import {AboutEnergyPractContainerComponent} from './menu-about/about-energy-practitioner/about-energy-pract-container/about-energy-pract-container.component';
import {AboutEnergyPractOverviewComponent} from './menu-about/about-energy-practitioner/about-energy-pract-overview/about-energy-pract-overview.component';

/* MENU BOOK FOLDER */
/* BOOK CONSULT */
import { BookConsultationContainerComponent } from './menu-book/book-consultation/book-consultation-container/book-consultation-container.component';
import { BookConsultationOverviewComponent } from './menu-book/book-consultation/book-consultation-overview/book-consultation-overview.component';

/* BOOK SESSION */
import { BookSessionContainerComponent } from './menu-book/book-session/book-session-container/book-session-container.component';
import { BookSessionOverviewComponent } from './menu-book/book-session/book-session-overview/book-session-overview.component';

/* MENU DOULA WORK */
/* PLAN AHEAD */
import { PlanAheadContainerComponent } from './menu-doula-work/plan-ahead/plan-ahead-container/plan-ahead-container.component';
import { PlanAheadOverviewComponent } from './menu-doula-work/plan-ahead/plan-ahead-overview/plan-ahead-overview.component';

/* SUPPORT CAREGIVERS */
import { SupportCaregiversOverviewComponent } from './menu-doula-work/supportCaregivers/support-caregivers-overview/support-caregivers-overview.component';
import { SupportCaregiversContainerComponent } from './menu-doula-work/supportCaregivers/support-caregivers-container/support-caregivers-container.component';

/* CEREMONY */
import { ChooseMemorialContainerComponent } from './menu-doula-work/choose-memorial/choose-memorial-container/choose-memorial-container.component';
import { ChooseMemorialOverviewComponent } from './menu-doula-work/choose-memorial/choose-memorial-overview/choose-memorial-overview.component';

/* REPRESENTATIVE */
import { ChooseRepresentativeContainerComponent } from './menu-doula-work/choose-representative/choose-representative-container/choose-representative-container.component';
import { ChooseRepresentativeOverviewComponent } from './menu-doula-work/choose-representative/choose-representative-overview/choose-representative-overview.component';

/* LEGACY */
import { CreateLegacyContainerComponent } from './menu-doula-work/create-legacy/create-legacy-container/create-legacy-container.component';
import { CreateLegacyOverviewComponent } from './menu-doula-work/create-legacy/create-legacy-overview/create-legacy-overview.component';

/* PATIENT */
import { CareForPatientsOverviewComponent } from './menu-doula-work/care-for-patients/care-for-patients-overview/care-for-patients-overview.component';
import { CareForPatientsContainerComponent } from './menu-doula-work/care-for-patients/care-for-patients-container/care-for-patients-container.component';

/* MENU ENERGY MEDICINE */
/* DISCOVER ELEMENT FOLDER */
import {ElementWheelComponent} from './menu-energy-medicine/discover-element/element-wheel/element-wheel.component';
import {SelectedElementComponent } from './menu-energy-medicine/discover-element/selected-element/selected-element.component';
import { DiscoverElementContainerComponent } from './menu-energy-medicine/discover-element/discover-element-container/discover-element-container.component';
import { DiscoverElementOverviewComponent } from './menu-energy-medicine/discover-element/discover-element-overview/discover-element-overview.component';

/* ENERGY EXERCISES */
import { DoEnergyExercisesOverviewComponent } from './menu-energy-medicine/do-energy-exercises/do-energy-exercises-overview/do-energy-exercises-overview.component';
import { DoEnergyExercisesContainerComponent } from './menu-energy-medicine/do-energy-exercises/do-energy-exercises-container/do-energy-exercises-container.component';

/* TRACE MERIDIANS */
import {MeridianTracingVideosComponent } from './menu-energy-medicine/trace-meridians/meridian-tracing-videos/meridian-tracing-videos.component';
import {MeridianWheelComponent } from './menu-energy-medicine/trace-meridians/meridian-wheel/meridian-wheel.component';
import {SelectedMeridianComponent } from './menu-energy-medicine/trace-meridians/selected-meridian/selected-meridian.component';
import { TraceMeridiansContainerComponent } from './menu-energy-medicine/trace-meridians/trace-meridians-container/trace-meridians-container.component';
import { TraceMeridiansOverviewComponent } from './menu-energy-medicine/trace-meridians/trace-meridians-overview/trace-meridians-overview.component';

/* REDUCE ANXIETY */
import { ReduceAnxietyOverviewComponent } from './menu-energy-medicine/reduce-anxiety/reduce-anxiety-overview/reduce-anxiety-overview.component';
import { ReduceAnxietyContainerComponent } from './menu-energy-medicine/reduce-anxiety/reduce-anxiety-container/reduce-anxiety-container.component';

/* RELIEVE BURNOUT */
import { RelieveBurnoutContainerComponent } from './menu-energy-medicine/relieve-burnout/relieve-burnout-container/relieve-burnout-container.component';
import { RelieveBurnoutOverviewComponent } from './menu-energy-medicine/relieve-burnout/relieve-burnout-overview/relieve-burnout-overview.component';

/* REDUCE PAIN */
import { DecreasePainOverviewComponent } from './menu-energy-medicine/decrease-pain/decrease-pain-overview/decrease-pain-overview.component';
import { DecreasePainContainerComponent } from './menu-energy-medicine/decrease-pain/decrease-pain-container/decrease-pain-container.component';

/* FAQ */
import { FaqContainerComponent } from './menu-faq/faq-container/faq-container.component';
import { FaqOverviewComponent } from './menu-faq/faq-overview/faq-overview.component';

/* HOME MENU FOLDER */
import {HomeContainerComponent} from './menu-home/home-container/home-container.component';
import {HomeOverviewComponent} from './menu-home/home-overview/home-overview.component';


import { WizardContainerComponent } from './menu-wizard/wizard-container/wizard-container.component';
import { WizardOverviewComponent } from './menu-wizard/wizard-overview/wizard-overview.component';
import { TsdmWizardOverviewComponent } from './menu-wizard/tsdm/tsdm-wizard-overview/tsdm-wizard-overview.component';
import { TsdmWizardContainerComponent } from './menu-wizard/tsdm/tsdm-wizard-container/tsdm-wizard-container.component';
import { RepNineWizardContainerComponent } from './menu-wizard/rep-nine/rep-nine-wizard-container/rep-nine-wizard-container.component';
import { RepNineWizardOverviewComponent } from './menu-wizard/rep-nine/rep-nine-wizard-overview/rep-nine-wizard-overview.component';
import { DnrWizardOverviewComponent } from './menu-wizard/dnr/dnr-wizard-overview/dnr-wizard-overview.component';

import { DnrWizardContainerComponent } from './menu-wizard/dnr/dnr-wizard-container/dnr-wizard-container.component';
import { EdithWizardOverviewComponent } from './menu-wizard/edith/edith-wizard-overview/edith-wizard-overview.component';
import { EdithWizardContainerComponent } from './menu-wizard/edith/edith-wizard-container/edith-wizard-container.component';
import { AcpWizardContainerComponent } from './menu-wizard/acp/acp-wizard-container/acp-wizard-container.component';
import { AcpWizardOverviewComponent } from './menu-wizard/acp/acp-wizard-overview/acp-wizard-overview.component';
import { TransferWizardOverviewComponent } from './menu-wizard/transfer/transfer-wizard-overview/transfer-wizard-overview.component';
import { TransferWizardContainerComponent } from './menu-wizard/transfer/transfer-wizard-container/transfer-wizard-container.component';
import {filter} from "rxjs";
import { RepNineFinalComponent } from './global-forms/representative-nine/rep-nine-final/rep-nine-final.component';

import { MedicalHistoryComponent } from './global-forms/inner-forms/medical-history/medical-history.component';
import { DemographicInfoComponent } from './global-forms/inner-forms/demographic-info/demographic-info.component';

import { SessionGoalsComponent} from "./global-forms/inner-forms/session-goals/session-goals.component";
import { EndOfLifePlanningComponent } from './global-forms/inner-forms/end-of-life-planning/end-of-life-planning.component';
import { SupportForCaregiverComponent } from './global-forms/inner-forms/support-for-caregiver/support-for-caregiver.component';
import { SupportForPatientComponent } from './global-forms/inner-forms/support-for-patient/support-for-patient.component';
import { IntakeForConsultationPatientComponent } from './global-forms/consultations/intake-for-consultation-patient/intake-for-consultation-patient.component';
import { IntakeForConsultationCaregiverComponent } from './global-forms/consultations/intake-for-consultation-caregiver/intake-for-consultation-caregiver.component';

import { IntakeForConsultationPlansComponent } from './global-forms/consultations/intake-for-consultation-plans/intake-for-consultation-plans.component';
import { MenuForConsultationsComponent } from './global-forms/consultations/menu-for-consultations/menu-for-consultations.component';
import { IntakeForEnergySessionComponent } from './global-forms/sessions/intake-for-energy-session/intake-for-energy-session.component';
import { FrailtyScaleComponent } from './global-forms/inner-forms/frailty-scale/frailty-scale.component';
import { SessionConsiderationsComponent } from './global-forms/inner-forms/session-considerations/session-considerations.component';
import { PrintIntakeForPlansComponent } from './menu-book/book-consultation/print-intake-for-plans/print-intake-for-plans.component';
import { PrintIntakeForCaregiverComponent } from './menu-book/book-consultation/print-intake-for-caregiver/print-intake-for-caregiver.component';
import { PrintIntakeForPatientComponent } from './menu-book/book-consultation/print-intake-for-patient/print-intake-for-patient.component';

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
        PrintSessionComponent,

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
        IntakeForConsultationPatientComponent,
        IntakeForConsultationCaregiverComponent,

        IntakeForConsultationPlansComponent,
          MenuForConsultationsComponent,
          IntakeForEnergySessionComponent,
          FrailtyScaleComponent,
          SessionConsiderationsComponent,
          PrintIntakeForPlansComponent,
          PrintIntakeForCaregiverComponent,
          PrintIntakeForPatientComponent,



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
