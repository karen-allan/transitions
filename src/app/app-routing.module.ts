import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';

import { AboutContainerComponent } from './about-menu/about-container/about-container.component';
import { AboutEolDoulaContainerComponent } from './about-menu/about-doula/about-eol-doula-container/about-eol-doula-container.component';
import { AboutEnergyPractContainerComponent } from './about-menu/about-energy/about-energy-pract-container/about-energy-pract-container.component';

import { HomeContainerComponent } from './home-menu/home-container/home-container.component';

import { AllSupportContainerComponent } from './support-menu/all-support-container/all-support-container.component';

import { DoulaHelpContainerComponent } from './support-menu/support-doula/doula-help-container/doula-help-container.component';
import { TopicAdvocateContainerComponent } from './support-menu/support-doula/doula-topics/advocate/topic-advocate-container/topic-advocate-container.component';
import { TopicCaregiverCareContainerComponent } from './support-menu/support-doula/doula-topics/caregiver/topic-caregiver-care-container/topic-caregiver-care-container.component';
import { TopicLegacyContainerComponent } from './support-menu/support-doula/doula-topics/legacy/topic-legacy-container/topic-legacy-container.component';
import { TopicPatientCareContainerComponent } from './support-menu/support-doula/doula-topics/patient/topic-patient-care-container/topic-patient-care-container.component';
import { TopicRepresentativeContainerComponent } from './support-menu/support-doula/doula-topics/representative/topic-representative-container/topic-representative-container.component';

import { TopicHelpAnxietyContainerComponent } from './support-menu/support-energy/energy-topics/anxiety/topic-help-anxiety-container/topic-help-anxiety-container.component';
import { TopicHelpBurnoutContainerComponent } from './support-menu/support-energy/energy-topics/burnout/topic-help-burnout-container/topic-help-burnout-container.component';
import { TopicHelpPainContainerComponent } from './support-menu/support-energy/energy-topics/pain/topic-help-pain-container/topic-help-pain-container.component';
import { TopicMoveEnergyContainerComponent } from './support-menu/support-energy/energy-topics/move/topic-move-energy-container/topic-move-energy-container.component';
import { TopicKnowMeridiansContainerComponent } from './support-menu/support-energy/energy-topics/meridians/topic-know-meridians-container/topic-know-meridians-container.component';
import { TopicCeremonyContainerComponent } from './support-menu/support-doula/doula-topics/ceremony/topic-ceremony-container/topic-ceremony-container.component';
import { EnergyHelpContainerComponent } from './support-menu/support-energy/energy-help-container/energy-help-container.component';
import { TopicDiscoverElementContainerComponent } from './support-menu/support-energy/energy-topics/elements/topic-discover-element-container/topic-discover-element-container.component';
import { BookContainerComponent } from './book-menu/book-container/book-container.component';
import { BookConsultContainerComponent } from './book-menu/book-consultation/book-consult-container/book-consult-container.component';
import { BookSessionContainerComponent } from './book-menu/book-session/book-session-container/book-session-container.component';
import { FaqContainerComponent } from './faq-menu/faq-container/faq-container.component';
import { FormsContainerComponent } from './book-menu/forms/forms-container/forms-container.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeContainerComponent},

    {path: 'about', component: AboutContainerComponent},
    {path: 'aboutPath', component: AboutContainerComponent},
    {path: 'aboutEndOfLifeDoula', component: AboutEolDoulaContainerComponent},
    {path: 'aboutEnergyMedicine', component: AboutEnergyPractContainerComponent},

    {path: 'book', component: BookContainerComponent},
    {path: 'bookAll', component: BookContainerComponent},
    {path: 'bookEOLConsult', component: BookConsultContainerComponent},
    {path: 'bookEnergySessions', component: BookSessionContainerComponent},

    {path: 'forms', component: FormsContainerComponent},

    {path: 'support', component: AllSupportContainerComponent},
    {path: 'supportAll', component: AllSupportContainerComponent},

    {path: 'supportSessions', component: EnergyHelpContainerComponent},
    {path: 'energyMedicineHelp', component: EnergyHelpContainerComponent},

    {path: 'energyHelpAnxiety', component: TopicHelpAnxietyContainerComponent},
    {path: 'energyHelpBurnout', component: TopicHelpBurnoutContainerComponent},
    {path: 'energyHelpPain', component: TopicHelpPainContainerComponent},
    {path: 'energyMoveEnergy', component: TopicMoveEnergyContainerComponent},
    {path: 'energyDiscoverElement', component: TopicDiscoverElementContainerComponent},
    {path: 'energyKnowMeridians', component: TopicKnowMeridiansContainerComponent},

    {path: 'supportEOLCare', component: DoulaHelpContainerComponent},
    {path: 'eolDoulaHelp', component: DoulaHelpContainerComponent},

    {path: 'eolTopicRepresentatives', component: TopicRepresentativeContainerComponent},
    {path: 'eolTopicAdvocate', component: TopicAdvocateContainerComponent},
    {path: 'eolTopicPatientCare', component: TopicPatientCareContainerComponent},
    {path: 'eolTopicCaregiverCare', component: TopicCaregiverCareContainerComponent},
    {path: 'eolTopicLegacy', component: TopicLegacyContainerComponent},
    {path: 'eolTopicCeremony', component: TopicCeremonyContainerComponent},

    {path: 'faq', component: FaqContainerComponent},
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};

@NgModule({
  imports:[RouterModule.forRoot(routes,  { scrollPositionRestoration: 'enabled' })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
