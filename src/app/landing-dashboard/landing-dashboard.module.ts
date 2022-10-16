// modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingDashboardRoutingModule } from './landing-dashboard.routing.module';
import { SharedModule } from '../shared/shared.module';

// components
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { PrivacyPoliceComponent } from './privacy-police/privacy-police.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { UpcomingCardComponent } from './upcoming/upcoming-card/upcoming-card.component';

@NgModule({
  imports: [
    RouterModule,
    LandingDashboardRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    FavoriteListComponent,
    NowPlayingComponent,
    PopularMoviesComponent,
    UpcomingComponent,
    NotFoundComponent,
    PrivacyPoliceComponent,
    UpcomingCardComponent
  ],
  exports: [
    HomeComponent,
    FavoriteListComponent,
    NowPlayingComponent,
    PopularMoviesComponent,
    UpcomingComponent,
    NotFoundComponent,
    PrivacyPoliceComponent,
    UpcomingCardComponent
  ]
})
export class LandingDashboardModule { }
