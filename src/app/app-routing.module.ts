import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import { MenuHomeComponent } from "./menu-home/menu-home.component";
import { MenuAboutComponent} from "./menu-about/menu-about.component";
import { EolDoulaContainerComponent } from './menu-about/doula-work/eol-doula-container/eol-doula-container.component';
import { EnergyPractitionerContainerComponent } from './menu-about/energy-work/energy-practitioner-container/energy-practitioner-container.component';
import { MenuSupportComponent } from './menu-support/menu-support.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MenuHomeComponent},
  {path: 'about', component: MenuAboutComponent},
    {path: 'aboutEnergyMedicine', component: EnergyPractitionerContainerComponent},
    {path: 'aboutEndOfLifeDoula', component: EolDoulaContainerComponent},
  {path: 'support', component: MenuSupportComponent},

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
