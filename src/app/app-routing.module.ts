import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';

import { AboutPathContainerComponent } from './menu-about/about-path-container/about-path-container.component';
import { AboutEolDoulaContainerComponent } from './menu-about/doula-path/about-eol-doula-container/about-eol-doula-container.component';
import { AboutEnergyPractContainerComponent } from './menu-about/energy-path/about-energy-pract-container/about-energy-pract-container.component';

import { HomeContainerComponent } from './menu-home/home-container/home-container.component';

import { AllSupportContainerComponent } from './menu-support/all-support-container/all-support-container.component';

import { DoulaHelpContainerComponent } from './menu-support/doula-support/doula-help-container/doula-help-container.component';
import { TopicAdvocateContainerComponent } from './menu-support/doula-support/doula-support-topics/topic-advocate/topic-advocate-container/topic-advocate-container.component';
import { TopicCaregiverCareContainerComponent } from './menu-support/doula-support/doula-support-topics/topic-caregiver-care/topic-caregiver-care-container/topic-caregiver-care-container.component';
import { TopicLegacyContainerComponent } from './menu-support/doula-support/doula-support-topics/topic-legacy/topic-legacy-container/topic-legacy-container.component';
import { TopicPatientCareContainerComponent } from './menu-support/doula-support/doula-support-topics/topic-patient-care/topic-patient-care-container/topic-patient-care-container.component';
import { TopicRepresentativeContainerComponent } from './menu-support/doula-support/doula-support-topics/topic-representative/topic-representative-container/topic-representative-container.component';

import { TopicHelpAnxietyContainerComponent } from './menu-support/energy-support/energy-support-topics/topic-help-anxiety/topic-help-anxiety-container/topic-help-anxiety-container.component';
import { TopicHelpBurnoutContainerComponent } from './menu-support/energy-support/energy-support-topics/topic-help-burnout/topic-help-burnout-container/topic-help-burnout-container.component';
import { TopicHelpPainContainerComponent } from './menu-support/energy-support/energy-support-topics/topic-help-pain/topic-help-pain-container/topic-help-pain-container.component';
import { TopicMoveEnergyContainerComponent } from './menu-support/energy-support/energy-support-topics/topic-move-energy/topic-move-energy-container/topic-move-energy-container.component';
import { TopicKnowMeridiansContainerComponent } from './menu-support/energy-support/energy-support-topics/topic-know-meridians/topic-know-meridians-container/topic-know-meridians-container.component';
import { TopicCeremonyContainerComponent } from './menu-support/doula-support/doula-support-topics/topic-ceremony/topic-ceremony-container/topic-ceremony-container.component';
import { EnergyMedicineHelpContainerComponent } from './menu-support/energy-support/energy-medicine-help-container/energy-medicine-help-container.component';
import { TopicDiscoverElementContainerComponent } from './menu-support/energy-support/energy-support-topics/topic-discover-element/topic-discover-element-container/topic-discover-element-container.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeContainerComponent},

  {path: 'about', component: AboutPathContainerComponent},
    {path: 'aboutPath', component: AboutPathContainerComponent},
    {path: 'aboutEndOfLifeDoula', component: AboutEolDoulaContainerComponent},
    {path: 'aboutEnergyMedicine', component: AboutEnergyPractContainerComponent},

  {path: 'support', component: AllSupportContainerComponent},
    {path: 'supportAll', component: AllSupportContainerComponent},

    {path: 'supportSessions', component: EnergyMedicineHelpContainerComponent},
        {path: 'energyMedicineHelp', component: EnergyMedicineHelpContainerComponent},

        {path: 'energyHelpAnxiety', component: TopicHelpAnxietyContainerComponent},
        {path: 'energyHelpBurnout', component: TopicHelpBurnoutContainerComponent},
        {path: 'energyHelpPain', component: TopicHelpPainContainerComponent},
        {path: 'energyMoveEnergy', component: TopicMoveEnergyContainerComponent},
        {path: 'energyDiscoverElement', component: TopicDiscoverElementContainerComponent},
        {path: 'energyKnowMeridians', component: TopicKnowMeridiansContainerComponent},

    {path: 'supportEOLCare', component: DoulaHelpContainerComponent},
        {path: 'doulaHelp', component: DoulaHelpContainerComponent},

        {path: 'eolTopicRepresentatives', component: TopicRepresentativeContainerComponent},
        {path: 'eolTopicAdvocate', component: TopicAdvocateContainerComponent},
        {path: 'eolTopicPatientCare', component: TopicPatientCareContainerComponent},
        {path: 'eolTopicCaregiverCare', component: TopicCaregiverCareContainerComponent},

        {path: 'eolTopicLegacy', component: TopicLegacyContainerComponent},
        {path: 'eolTopicCeremony', component: TopicCeremonyContainerComponent},

    // {path: 'booking', component: BookingContainerComponent},
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
