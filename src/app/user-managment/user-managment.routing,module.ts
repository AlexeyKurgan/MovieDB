import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagmentComponent } from './components/user-managment/user-managment.component';

// components
const routes: Routes = [
  {
    path: '',
    component: UserManagmentComponent
  },
  {
    path: 'login',
    loadChildren: ()=> import('./user-account/user-account.module').then(m => m.UserAccountModule)
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