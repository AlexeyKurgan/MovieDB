import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingRoutingModule } from './upcoming.routing.module.';
import { LandingDashboardSharedModule } from '../shared/landing-dashboard-shared.module';

// Components 
import { UpcomingMainComponent } from './upcoming-main/upcoming-main.component';

@NgModule({
  imports: [
    CommonModule,
    UpcomingRoutingModule,
    SharedModule,
    LandingDashboardSharedModule
  ],
  declarations: [
    UpcomingMainComponent,
  ],
  exports: [
    UpcomingMainComponent, 
  ]
})
export class UpcomingModule { }
