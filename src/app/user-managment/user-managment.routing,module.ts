import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagmentComponent } from './components/user-managment/user-managment.component';

// components
const routes: Routes = [
  // temporary solution
  {
    path: '',
    component: UserManagmentComponent
  },
  {
    path: 'account-settings',
    loadChildren: ()=> import('./user-account-settings/user-account-settings.module').then(m => m.UserAccountSettingsModule)
  },
  {
    path: 'user-activity',
    loadChildren: ()=> import('./user-activity/user-activity.module').then(m => m.UserActivityModule)
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class UserManagmentRoutingModule { }