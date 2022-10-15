import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: ()=> import('./landing-dashboard/landing-dashboard.module').then(m => m.LandingDashboardModule)
  },
  {
    path: 'user-managment',
    loadChildren: ()=> import('./user-managment/user-managment.module').then(m => m.UserManagmentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
