import { NgModule } from '@angular/core';
import {DatePipe} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { GlobalGridsComponent } from './global-grids/global-grids.component';
import { GlobalHeadersComponent } from './global-headers/global-headers.component';
import { GlobalMenuComponent } from './global-menu/global-menu.component';
import { GlobalSubMenuComponent } from './global-sub-menu/global-sub-menu.component';
import { GlobalTopicMenuComponent } from './global-topic-menu/global-topic-menu.component';

import { MenuAboutComponent } from './menu-about/menu-about.component';
import { AboutPathContainerComponent } from './menu-about/about-path-container/about-path-container.component';
import { AboutPathOverviewComponent } from './menu-about/about-path-overview/about-path-overview.component';

/* ABOUT DOULA PATH FOLDER */
import {AboutEolDoulaContainerComponent} from './menu-about/doula-path/about-eol-doula-container/about-eol-doula-container.component';
import {AboutEolDoulaOverviewComponent} from './menu-about/doula-path/about-eol-doula-overview/about-eol-doula-overview.component';

/* ABOUT ENERGY PATH FOLDER */
import {AboutEnergyPractContainerComponent} from './menu-about/energy-path/about-energy-pract-container/about-energy-pract-container.component';
import {AboutEnergyPractOverviewComponent} from './menu-about/energy-path/about-energy-pract-overview/about-energy-pract-overview.component';

import {MenuHomeComponent} from './menu-home/menu-home.component';
import {HomeContainerComponent} from './menu-home/home-container/home-container.component';
import {HomeOverviewComponent} from './menu-home/home-overview/home-overview.component';

import {MenuSupportComponent} from './menu-support/menu-support.component';
import {AllSupportContainerComponent} from './menu-support/all-support-container/all-support-container.component';
import {AllSupportOverviewComponent} from './menu-support/all-support-overview/all-support-overview.component';

/* DOULA HELP */
import {DoulaHelpContainerComponent} from './menu-support/doula-support/doula-help-container/doula-help-container.component';
import {DoulaHelpOverviewComponent} from './menu-support/doula-support/doula-help-overview/doula-help-overview.component';

/* DOULA SUPPORT TOPICS */
import {TopicAdvocateContainerComponent} from './menu-support/doula-support/doula-support-topics/topic-advocate/topic-advocate-container/topic-advocate-container.component';
import {TopicAdvocateOverviewComponent} from './menu-support/doula-support/doula-support-topics/topic-advocate/topic-advocate-overview/topic-advocate-overview.component';

import {TopicCaregiverCareContainerComponent} from './menu-support/doula-support/doula-support-topics/topic-caregiver-care/topic-caregiver-care-container/topic-caregiver-care-container.component';
import {TopicCaregiverCareOverviewComponent} from './menu-support/doula-support/doula-support-topics/topic-caregiver-care/topic-caregiver-care-overview/topic-caregiver-care-overview.component';

import {TopicLegacyContainerComponent} from './menu-support/doula-support/doula-support-topics/topic-legacy/topic-legacy-container/topic-legacy-container.component';
import {TopicLegacyOverviewComponent} from './menu-support/doula-support/doula-support-topics/topic-legacy/topic-legacy-overview/topic-legacy-overview.component';

import {TopicPatientCareContainerComponent} from './menu-support/doula-support/doula-support-topics/topic-patient-care/topic-patient-care-container/topic-patient-care-container.component';
import {TopicPatientCareOverviewComponent} from './menu-support/doula-support/doula-support-topics/topic-patient-care/topic-patient-care-overview/topic-patient-care-overview.component';

import {TopicRepresentativeContainerComponent} from './menu-support/doula-support/doula-support-topics/topic-representative/topic-representative-container/topic-representative-container.component';
import {TopicRepresentativeOverviewComponent} from './menu-support/doula-support/doula-support-topics/topic-representative/topic-representative-overview/topic-representative-overview.component';

/* ENERGY MEDICINE HELP */
import {EnergyMedicineHelpContainerComponent} from './menu-support/energy-support/energy-medicine-help-container/energy-medicine-help-container.component';
import {EnergyMedicineHelpOverviewComponent} from './menu-support/energy-support/energy-medicine-help-overview/energy-medicine-help-overview.component';

/* ENERGY SUPPORT TOPICS */
import {TopicHelpAnxietyContainerComponent} from './menu-support/energy-support/energy-support-topics/topic-help-anxiety/topic-help-anxiety-container/topic-help-anxiety-container.component';
import {TopicHelpAnxietyOverviewComponent} from './menu-support/energy-support/energy-support-topics/topic-help-anxiety/topic-help-anxiety-overview/topic-help-anxiety-overview.component';

import {TopicHelpBurnoutContainerComponent} from './menu-support/energy-support/energy-support-topics/topic-help-burnout/topic-help-burnout-container/topic-help-burnout-container.component';
import {TopicHelpBurnoutOverviewComponent} from './menu-support/energy-support/energy-support-topics/topic-help-burnout/topic-help-burnout-overview/topic-help-burnout-overview.component';

import {TopicHelpPainContainerComponent} from './menu-support/energy-support/energy-support-topics/topic-help-pain/topic-help-pain-container/topic-help-pain-container.component';
import {TopicHelpPainOverviewComponent} from './menu-support/energy-support/energy-support-topics/topic-help-pain/topic-help-pain-overview/topic-help-pain-overview.component';

import {TopicMoveEnergyContainerComponent} from './menu-support/energy-support/energy-support-topics/topic-move-energy/topic-move-energy-container/topic-move-energy-container.component';
import {TopicMoveEnergyOverviewComponent} from './menu-support/energy-support/energy-support-topics/topic-move-energy/topic-move-energy-overview/topic-move-energy-overview.component';

import {TopicDiscoverElementContainerComponent} from './menu-support/energy-support/energy-support-topics/topic-discover-element/topic-discover-element-container/topic-discover-element-container.component';
import {TopicDiscoverElementOverviewComponent} from './menu-support/energy-support/energy-support-topics/topic-discover-element/topic-discover-element-overview/topic-discover-element-overview.component';

import {TopicKnowMeridiansOverviewComponent} from './menu-support/energy-support/energy-support-topics/topic-know-meridians/topic-know-meridians-overview/topic-know-meridians-overview.component';
import {TopicKnowMeridiansContainerComponent} from './menu-support/energy-support/energy-support-topics/topic-know-meridians/topic-know-meridians-container/topic-know-meridians-container.component';

import {TopicCeremonyContainerComponent} from './menu-support/doula-support/doula-support-topics/topic-ceremony/topic-ceremony-container/topic-ceremony-container.component';
import {TopicCeremonyOverviewComponent} from './menu-support/doula-support/doula-support-topics/topic-ceremony/topic-ceremony-overview/topic-ceremony-overview.component';

import {ElementWheelComponent} from './menu-support/energy-support/energy-support-topics/topic-discover-element/element-wheel/element-wheel.component';
import { SelectedElementComponent } from './menu-support/energy-support/energy-support-topics/topic-discover-element/selected-element/selected-element.component';


@NgModule({
    declarations: [
        AppComponent,

        GlobalFooterComponent,
        GlobalGridsComponent,
        GlobalHeadersComponent,
        GlobalMenuComponent,
        GlobalSubMenuComponent,
        GlobalTopicMenuComponent,

        MenuAboutComponent,
        /* ABOUT ME */
        AboutPathOverviewComponent,
        AboutPathContainerComponent,

        /* ENERGY WORK FOLDER */
        AboutEnergyPractContainerComponent,
        AboutEnergyPractOverviewComponent,

        /* DOULA WORK FOLDER */
        AboutEolDoulaContainerComponent,
        AboutEolDoulaOverviewComponent,

        MenuHomeComponent,
        HomeOverviewComponent,

        MenuSupportComponent,
        /* ALL SUPPORT */
        AllSupportContainerComponent,
        AllSupportOverviewComponent,

        /* DOULA SUPPORT */

        /* ENERGY SUPPORT */


        TopicPatientCareContainerComponent,
        TopicPatientCareOverviewComponent,
        TopicCaregiverCareContainerComponent,
        TopicCaregiverCareOverviewComponent,
        TopicAdvocateContainerComponent,
        TopicAdvocateOverviewComponent,
        TopicLegacyContainerComponent,
        TopicLegacyOverviewComponent,

        TopicRepresentativeContainerComponent,
        TopicRepresentativeOverviewComponent,

        TopicHelpAnxietyContainerComponent,
        TopicHelpAnxietyOverviewComponent,

        TopicHelpBurnoutContainerComponent,
        TopicHelpBurnoutOverviewComponent,

        TopicHelpPainContainerComponent,
        TopicHelpPainOverviewComponent,


        HomeContainerComponent,

        TopicCeremonyContainerComponent,
        TopicCeremonyOverviewComponent,
        EnergyMedicineHelpContainerComponent,
        EnergyMedicineHelpOverviewComponent,
        DoulaHelpContainerComponent,
        DoulaHelpOverviewComponent,
        TopicMoveEnergyContainerComponent,
        TopicMoveEnergyOverviewComponent,
        TopicDiscoverElementContainerComponent,
        TopicDiscoverElementOverviewComponent,
        TopicKnowMeridiansOverviewComponent,
        TopicKnowMeridiansContainerComponent,



        ElementWheelComponent,


            SelectedElementComponent,


        










  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
