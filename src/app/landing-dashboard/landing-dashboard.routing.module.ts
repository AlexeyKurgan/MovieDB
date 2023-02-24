// modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// components
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { PrivacyPoliceComponent } from './privacy-police/privacy-police.component';

const routes: Routes = [
  {
    path: '',
    children: [
        { path: '', component: HomeComponent },
        { path: 'favorite-list', component: FavoriteListComponent },
        { path: 'now-playing', component: NowPlayingComponent },
        { path: 'popular', component: PopularMoviesComponent },
        {
          path: 'upcoming',
          loadChildren: ()=> import('./upcoming/upcoming.module').then(m => m.UpcomingModule)
        },
        { path: 'privacy-police', component: PrivacyPoliceComponent },
        { path: '**', component: NotFoundComponent },
    ],
},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class LandingDashboardRoutingModule { }