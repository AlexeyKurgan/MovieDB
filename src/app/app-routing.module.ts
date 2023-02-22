import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: ()=> import('./landing-dashboard/landing-dashboard.module').then(m => m.LandingDashboardModule)
  },
  {
    path: 'user-managment',
    loadChildren: ()=> import('./user-managment/user-managment.module').then(m => m.UserManagmentModule)
  },
  {
    path: 'registration',
    loadChildren: ()=> import('./registration/registration.module').then(m => m.RegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
