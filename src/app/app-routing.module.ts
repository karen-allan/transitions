import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/* MENU ABOUT */
import { AboutEolAdvocacyContainerComponent } from './menu-about/about-eol-advocacy/about-eol-advocacy-container/about-eol-advocacy-container.component';
import { AboutPractitionerContainerComponent } from './menu-about/about-practitioner/about-practitioner-container/about-practitioner-container.component';

/* MENU CONSULTATION */
import { RolesOfConsultantContainerComponent } from './menu-consultations/roles-of-consultant/roles-of-consultant-container/roles-of-consultant-container.component';
import { BookConsultationContainerComponent } from './menu-consultations/book-consultation/book-consultation-container/book-consultation-container.component';

/* MENU HOME */
import { HomeContainerComponent } from './menu-home/home-container/home-container.component';

/* MENU PLAN AHEAD */
import { PlanAheadWizardContainerComponent } from './menu-plan-ahead/plan-ahead-wizard/plan-ahead-wizard-container/plan-ahead-wizard-container.component';
import { BeProactiveNowContainerComponent } from './menu-plan-ahead/be-proactive-now/be-proactive-now-container/be-proactive-now-container.component';
import { DocumentsToSignContainerComponent } from './menu-plan-ahead/documents-to-sign/documents-to-sign-container/documents-to-sign-container.component';


/* AS SHOWN ON MENU */
const routes: Routes = [
    {path: '', redirectTo: '/menuHome', pathMatch: 'full'},

    {path: 'menuHome', component: HomeContainerComponent},

    {path: 'menuAbout', component: AboutEolAdvocacyContainerComponent},
    {path: 'aboutEndOfLifeAdvocacy', component: AboutEolAdvocacyContainerComponent},
    {path: 'aboutPractitioner', component: AboutPractitionerContainerComponent},

    {path: 'menuConsultations', component: RolesOfConsultantContainerComponent},
    {path: 'rolesOfConsultant', component: RolesOfConsultantContainerComponent},
    {path: 'bookConsultation', component: BookConsultationContainerComponent},

    {path: 'menuPlanAhead', component: BeProactiveNowContainerComponent},
    {path: 'beProactiveNow', component: BeProactiveNowContainerComponent},
    {path: 'planAheadWizard', component: PlanAheadWizardContainerComponent},
    {path: 'documentsToSign', component: DocumentsToSignContainerComponent},

    // {path: 'printWizard', component: PrintPlanAheadDirectiveComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes,  { scrollPositionRestoration: 'enabled' })],

    exports: [RouterModule]
})
export class AppRoutingModule { }
