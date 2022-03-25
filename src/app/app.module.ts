import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


/* GLOBAL FOOTER */
import { GlobalFooterComponent } from './global-footer/global-footer.component';

/* GLOBAL FORMS */
/* CONSULTATIONS */
import { ConsultationFormContainerComponent } from './global-forms/consultations/consultation-form-container/consultation-form-container.component';
import { ConsultationFormOverviewComponent } from './global-forms/consultations/consultation-form-overview/consultation-form-overview.component';
import { IntakeCaregiverSupportComponent } from './global-forms/consultations/intake-caregiver-support/intake-caregiver-support.component';
import { IntakeConsultDemographicComponent } from './global-forms/consultations/intake-consult-demographic/intake-consult-demographic.component';
import { IntakeConsultMedicalComponent } from './global-forms/consultations/intake-consult-medical/intake-consult-medical.component';
import { IntakeMakePlanComponent } from './global-forms/consultations/intake-make-plan/intake-make-plan.component';
import { IntakePatientSupportComponent } from './global-forms/consultations/intake-patient-support/intake-patient-support.component';

/* CURRENTLY, NOT IN USE */
import { CovidComponent } from './global-forms/covid/covid.component';

/* SESSIONS */
import { IntakeEnergyTreatmentComponent } from './global-forms/sessions/intake-energy-treatment/intake-energy-treatment.component';
import { IntakeSessionDemographicComponent } from './global-forms/sessions/intake-session-demographic/intake-session-demographic.component';
import { IntakeSessionMedicalComponent } from './global-forms/sessions/intake-session-medical/intake-session-medical.component';
import { SessionFormContainerComponent } from './global-forms/sessions/session-form-container/session-form-container.component';
import { SessionFormOverviewComponent } from './global-forms/sessions/session-form-overview/session-form-overview.component';

/* GLOBAL GRIDS */
import { GlobalGridsComponent } from './global-grids/global-grids.component';

/* GLOBAL HEADERS */
import { GlobalHeadersComponent } from './global-headers/global-headers.component';

/* GLOBAL MENU */
import { GlobalMenuComponent } from './global-menu/global-menu.component';

/* GLOBAL PRINT */
import { PrintSessionComponent } from './global-print/print-session/print-session.component';

/* GLOBAL SUB MENU */
import { GlobalSubMenuComponent } from './global-sub-menu/global-sub-menu.component';

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




@NgModule({
    declarations: [
        AppComponent,

        /* GLOBALS */
        GlobalFooterComponent,

        /* GLOBAL FORMS */
        /* CONSULTATIONS */
        ConsultationFormContainerComponent,
        ConsultationFormOverviewComponent,
        IntakeCaregiverSupportComponent,
        IntakeConsultDemographicComponent,
        IntakeConsultMedicalComponent,
        IntakeMakePlanComponent,
        IntakePatientSupportComponent,

        CovidComponent,

        /* SESSIONS */
        IntakeEnergyTreatmentComponent,
        IntakeSessionDemographicComponent,
        IntakeSessionMedicalComponent,
        SessionFormContainerComponent,
        SessionFormOverviewComponent,

        GlobalGridsComponent,
        GlobalHeadersComponent,
        GlobalMenuComponent,
        /* GLOBAL PRINT */
        PrintSessionComponent,

        GlobalSubMenuComponent,

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


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
