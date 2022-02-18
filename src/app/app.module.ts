import { NgModule } from '@angular/core';
import {DatePipe} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


/* ABOUT MENU FOLDER */
import { AboutContainerComponent } from './about-menu/about-container/about-container.component';

/* ABOUT DOULA FOLDER */
import {AboutEolDoulaContainerComponent} from './about-menu/about-doula/about-eol-doula-container/about-eol-doula-container.component';
import {AboutEolDoulaOverviewComponent} from './about-menu/about-doula/about-eol-doula-overview/about-eol-doula-overview.component';

/* ABOUT ENERGY FOLDER */
import {AboutEnergyPractContainerComponent} from './about-menu/about-energy/about-energy-pract-container/about-energy-pract-container.component';
import {AboutEnergyPractOverviewComponent} from './about-menu/about-energy/about-energy-pract-overview/about-energy-pract-overview.component';

import { AboutOverviewComponent } from './about-menu/about-overview/about-overview.component';

/* BOOK MENU FOLDER */
import { BookConsultContainerComponent } from './book-menu/book-consultation/book-consult-container/book-consult-container.component';
import { BookConsultOverviewComponent } from './book-menu/book-consultation/book-consult-overview/book-consult-overview.component';

import { BookContainerComponent } from './book-menu/book-container/book-container.component';
import { BookOverviewComponent } from './book-menu/book-overview/book-overview.component';

import { BookSessionContainerComponent } from './book-menu/book-session/book-session-container/book-session-container.component';
import { BookSessionOverviewComponent } from './book-menu/book-session/book-session-overview/book-session-overview.component';

/* FORMS */
import { FormSideMenuComponent } from './book-menu/forms/form-side-menu/form-side-menu.component';
import { SessionProfileComponent } from './book-menu/forms/form-session/session-profile/session-profile.component';
import { ConsultProfileComponent } from './book-menu/forms/form-consult/consult-profile/consult-profile.component';
import { CovidProfileComponent } from './book-menu/forms/form-covid/covid-profile/covid-profile.component';

/* FAQ */
import { FaqContainerComponent } from './faq-menu/faq-container/faq-container.component';
import { FaqOverviewComponent } from './faq-menu/faq-overview/faq-overview.component';

/* GLOBAL */
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { GlobalGridsComponent } from './global-grids/global-grids.component';
import { GlobalHeadersComponent } from './global-headers/global-headers.component';
import { GlobalMenuComponent } from './global-menu/global-menu.component';
import { GlobalSubMenuComponent } from './global-sub-menu/global-sub-menu.component';
import { GlobalTopicMenuComponent } from './global-topic-menu/global-topic-menu.component';

/* HOME MENU FOLDER */
import {HomeContainerComponent} from './home-menu/home-container/home-container.component';
import {HomeOverviewComponent} from './home-menu/home-overview/home-overview.component';

/* SUPPORT MENU FOLDER */
import {AllSupportContainerComponent} from './support-menu/all-support-container/all-support-container.component';
import {AllSupportOverviewComponent} from './support-menu/all-support-overview/all-support-overview.component';

/* SUPPORT DOULA FOLDER*/
import {DoulaHelpContainerComponent} from './support-menu/support-doula/doula-help-container/doula-help-container.component';
import {DoulaHelpOverviewComponent} from './support-menu/support-doula/doula-help-overview/doula-help-overview.component';

/* DOULA TOPICS */

/* ADVOCATE ADVANCED CARE PLANNING */
import {TopicAdvocateContainerComponent} from './support-menu/support-doula/doula-topics/advocate/topic-advocate-container/topic-advocate-container.component';
import {TopicAdvocateOverviewComponent} from './support-menu/support-doula/doula-topics/advocate/topic-advocate-overview/topic-advocate-overview.component';

/* CAREGIVER CARE */
import {TopicCaregiverCareContainerComponent} from './support-menu/support-doula/doula-topics/caregiver/topic-caregiver-care-container/topic-caregiver-care-container.component';
import {TopicCaregiverCareOverviewComponent} from './support-menu/support-doula/doula-topics/caregiver/topic-caregiver-care-overview/topic-caregiver-care-overview.component';

/* CEREMONY */
import {TopicCeremonyContainerComponent} from './support-menu/support-doula/doula-topics/ceremony/topic-ceremony-container/topic-ceremony-container.component';
import {TopicCeremonyOverviewComponent} from './support-menu/support-doula/doula-topics/ceremony/topic-ceremony-overview/topic-ceremony-overview.component';

/* LEGACY */
import {TopicLegacyContainerComponent} from './support-menu/support-doula/doula-topics/legacy/topic-legacy-container/topic-legacy-container.component';
import {TopicLegacyOverviewComponent} from './support-menu/support-doula/doula-topics/legacy/topic-legacy-overview/topic-legacy-overview.component';

/* PATIENT */
import {TopicPatientCareContainerComponent} from './support-menu/support-doula/doula-topics/patient/topic-patient-care-container/topic-patient-care-container.component';
import {TopicPatientCareOverviewComponent} from './support-menu/support-doula/doula-topics/patient/topic-patient-care-overview/topic-patient-care-overview.component';

/* REPRESENTATIVE */
import {TopicRepresentativeContainerComponent} from './support-menu/support-doula/doula-topics/representative/topic-representative-container/topic-representative-container.component';
import {TopicRepresentativeOverviewComponent} from './support-menu/support-doula/doula-topics/representative/topic-representative-overview/topic-representative-overview.component';

/* SUPPORT ENERGY */
import { EnergyHelpContainerComponent } from './support-menu/support-energy/energy-help-container/energy-help-container.component';
import { EnergyHelpOverviewComponent } from './support-menu/support-energy/energy-help-overview/energy-help-overview.component';

/* ENERGY TOPICS */

/* ANXIETY */
import {TopicHelpAnxietyContainerComponent} from './support-menu/support-energy/energy-topics/anxiety/topic-help-anxiety-container/topic-help-anxiety-container.component';
import {TopicHelpAnxietyOverviewComponent} from './support-menu/support-energy/energy-topics/anxiety/topic-help-anxiety-overview/topic-help-anxiety-overview.component';

/* BURNOUT */
import {TopicHelpBurnoutContainerComponent} from './support-menu/support-energy/energy-topics/burnout/topic-help-burnout-container/topic-help-burnout-container.component';
import {TopicHelpBurnoutOverviewComponent} from './support-menu/support-energy/energy-topics/burnout/topic-help-burnout-overview/topic-help-burnout-overview.component';

/* ELEMENTS */
import {ElementWheelComponent} from './support-menu/support-energy/energy-topics/elements/element-wheel/element-wheel.component';
import { SelectedElementComponent } from './support-menu/support-energy/energy-topics/elements/selected-element/selected-element.component';
import {TopicDiscoverElementContainerComponent} from './support-menu/support-energy/energy-topics/elements/topic-discover-element-container/topic-discover-element-container.component';
import {TopicDiscoverElementOverviewComponent} from './support-menu/support-energy/energy-topics/elements/topic-discover-element-overview/topic-discover-element-overview.component';

/* MERIDIANS */
import { MeridianTracingVideosComponent } from './support-menu/support-energy/energy-topics/meridians/meridian-tracing-videos/meridian-tracing-videos.component';
import { MeridianWheelComponent } from './support-menu/support-energy/energy-topics/meridians/meridian-wheel/meridian-wheel.component';
import { SelectedMeridianComponent } from './support-menu/support-energy/energy-topics/meridians/selected-meridian/selected-meridian.component';
import {TopicKnowMeridiansContainerComponent} from './support-menu/support-energy/energy-topics/meridians/topic-know-meridians-container/topic-know-meridians-container.component';
import {TopicKnowMeridiansOverviewComponent} from './support-menu/support-energy/energy-topics/meridians/topic-know-meridians-overview/topic-know-meridians-overview.component';

/* MOVE EXERCISES */
import {TopicMoveEnergyContainerComponent} from './support-menu/support-energy/energy-topics/move/topic-move-energy-container/topic-move-energy-container.component';
import {TopicMoveEnergyOverviewComponent} from './support-menu/support-energy/energy-topics/move/topic-move-energy-overview/topic-move-energy-overview.component';

/* PAIN */
import {TopicHelpPainContainerComponent} from './support-menu/support-energy/energy-topics/pain/topic-help-pain-container/topic-help-pain-container.component';
import {TopicHelpPainOverviewComponent} from './support-menu/support-energy/energy-topics/pain/topic-help-pain-overview/topic-help-pain-overview.component';

import { FormsContainerComponent } from './book-menu/forms/forms-container/forms-container.component';







@NgModule({
    declarations: [
        AppComponent,

        /* ABOUT */
        AboutContainerComponent,

        /* ABOUT DOULA */
        AboutEolDoulaContainerComponent,
        AboutEolDoulaOverviewComponent,

        /* ABOUT ENERGY */
        AboutEnergyPractContainerComponent,
        AboutEnergyPractOverviewComponent,

        /* ABOUT */
        AboutOverviewComponent,

        /* BOOK */
        BookContainerComponent,
        BookOverviewComponent,

        /* GLOBALS */
        GlobalFooterComponent,
        GlobalGridsComponent,
        GlobalHeadersComponent,
        GlobalMenuComponent,
        GlobalSubMenuComponent,
        GlobalTopicMenuComponent,

        /* HOME */
        HomeContainerComponent,
        HomeOverviewComponent,

        /* SUPPORT */
        AllSupportContainerComponent,
        AllSupportOverviewComponent,

        /* SUPPORT DOULA */
        DoulaHelpContainerComponent,
        DoulaHelpOverviewComponent,

        /* DOULA TOPICS*/
        TopicAdvocateContainerComponent,
        TopicAdvocateOverviewComponent,

        TopicCaregiverCareContainerComponent,
        TopicCaregiverCareOverviewComponent,

        TopicCeremonyContainerComponent,
        TopicCeremonyOverviewComponent,

        TopicLegacyContainerComponent,
        TopicLegacyOverviewComponent,

        TopicPatientCareContainerComponent,
        TopicPatientCareOverviewComponent,

        TopicRepresentativeContainerComponent,
        TopicRepresentativeOverviewComponent,

        /* SUPPORT ENERGY */
        EnergyHelpContainerComponent,
        EnergyHelpOverviewComponent,

        /* ENERGY TOPICS*/
        TopicHelpAnxietyContainerComponent,
        TopicHelpAnxietyOverviewComponent,

        TopicHelpBurnoutContainerComponent,
        TopicHelpBurnoutOverviewComponent,

        ElementWheelComponent,
        SelectedElementComponent,
        TopicDiscoverElementContainerComponent,
        TopicDiscoverElementOverviewComponent,

        MeridianTracingVideosComponent,
        MeridianWheelComponent,
        SelectedMeridianComponent,
        TopicKnowMeridiansOverviewComponent,
        TopicKnowMeridiansContainerComponent,

        TopicMoveEnergyContainerComponent,
        TopicMoveEnergyOverviewComponent,

        TopicHelpPainContainerComponent,
        TopicHelpPainOverviewComponent,
        FormSideMenuComponent,
        BookConsultOverviewComponent,
        BookConsultContainerComponent,
        BookSessionOverviewComponent,
        BookSessionContainerComponent,

        FaqContainerComponent,
        FaqOverviewComponent,
        SessionProfileComponent,
        ConsultProfileComponent,
        CovidProfileComponent,

        FormsContainerComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
