import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { MenuAboutComponent } from './menu-about/menu-about.component';
import { AboutOverviewComponent } from './menu-about/about-overview/about-overview.component';
/* Doula Work Folder */
    import { EolDoulaContainerComponent } from './menu-about/doula-work/eol-doula-container/eol-doula-container.component';
    import { EolDoulaOverviewComponent } from './menu-about/doula-work/eol-doula-overview/eol-doula-overview.component';

/* Energy Work Folder */
  import { EnergyPractitionerContainerComponent } from './menu-about/energy-work/energy-practitioner-container/energy-practitioner-container.component';
  import { EnergyPractitionerOverviewComponent } from './menu-about/energy-work/energy-practitioner-overview/energy-practitioner-overview.component';


import { MenuHomeComponent } from './menu-home/menu-home.component';
  import { HomeOverviewComponent } from './menu-home/home-overview/home-overview.component';

import { MenuSupportComponent } from './menu-support/menu-support.component';


import { AppRoutingModule } from './app-routing.module';

import { GlobalMenuComponent } from './global-menu/global-menu.component';
import { GlobalHeadersComponent } from './global-headers/global-headers.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { GlobalSubMenuComponent } from './global-sub-menu/global-sub-menu.component';

import { AllSupportOverviewComponent } from './menu-support/all-support-overview/all-support-overview.component';






@NgModule({
  declarations: [
    AppComponent,

    GlobalMenuComponent,
    GlobalHeadersComponent,
    GlobalFooterComponent,
    GlobalSubMenuComponent,

    MenuAboutComponent,
    AboutOverviewComponent,
        EolDoulaContainerComponent,
        EolDoulaOverviewComponent,

      EnergyPractitionerContainerComponent,
      EnergyPractitionerOverviewComponent,

    MenuHomeComponent,
    HomeOverviewComponent,

    MenuSupportComponent,

    AllSupportOverviewComponent










  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
