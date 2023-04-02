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
import { UpcomingModule } from './upcoming/upcoming.module';
import { TopRatedComponent } from './top-rated/top-rated.component';

@NgModule({
  imports: [
    RouterModule,
    LandingDashboardRoutingModule,
    UpcomingModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    FavoriteListComponent,
    NowPlayingComponent,
    PopularMoviesComponent,
    TopRatedComponent,
    NotFoundComponent,
    PrivacyPoliceComponent,
  ],
  exports: [
    HomeComponent,
    FavoriteListComponent,
    NowPlayingComponent,
    PopularMoviesComponent,
    TopRatedComponent,
    NotFoundComponent,
    PrivacyPoliceComponent,
    UpcomingModule,
  ]
})
export class LandingDashboardModule { }
