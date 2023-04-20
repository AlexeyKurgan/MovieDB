// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components 
import { MovieListComponent } from './components/movie-list/movie-list.component';

import { BornTodayComponent } from './components/born-today/born-today.component';
import { RecentlyViewedComponent } from './components/recently-viewed/recently-viewed.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [
      MovieListComponent,
      BornTodayComponent,
      RecentlyViewedComponent
    ],
    exports: [
      MovieListComponent,
      BornTodayComponent,
      RecentlyViewedComponent
    ],
    imports: [
      CommonModule,
      SharedModule
    ]
})
export class LandingDashboardSharedModule { }
