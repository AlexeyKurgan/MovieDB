// modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// components
import { UpcomingMainComponent } from './upcoming-main/upcoming-main.component';

const routes: Routes = [
  { path:'', 
    component: UpcomingMainComponent,
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class UpcomingRoutingModule { }