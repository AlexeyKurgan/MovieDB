import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingRoutingModule } from './upcoming.routing.module.';

// Components 
import { UpcomingMainComponent } from './upcoming-main/upcoming-main.component';
import { UpcomingCardComponent } from './upcoming-card/upcoming-card.component';
import { UpcomingPreviewComponent } from './upcoming-preview/upcoming-preview.component';
import { UpcomingAllComponent } from './upcoming-all/upcoming-all.component';

@NgModule({
  imports: [
    CommonModule,
    UpcomingRoutingModule,
    SharedModule,
  ],
  declarations: [
    UpcomingMainComponent,
    UpcomingCardComponent,
    UpcomingPreviewComponent,
    UpcomingAllComponent,
  ],
  exports: [
    UpcomingMainComponent, 
    UpcomingCardComponent, 
    UpcomingPreviewComponent, 
    UpcomingAllComponent,
  ]
})
export class UpcomingModule { }
