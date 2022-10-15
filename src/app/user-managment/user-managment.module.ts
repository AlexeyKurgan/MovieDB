import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { SharedModule } from '../shared/shared.module';
import { UserAccountSettingsModule } from './user-account-settings/user-account-settings.module';
import { UserAccountModule } from './user-account/user-account.module';
import { UserActivityModule } from './user-activity/user-activity.module';
import { UserManagmentRoutingModule } from './user-managment.routing,module';
// import { CommonModule } from '@angular/common';
// import { UserManagmentComponent } from './user-managment.component';

@NgModule({
  imports: [
    RouterModule,
    UserManagmentRoutingModule,
    // SharedModule,
    UserAccountSettingsModule,
    UserActivityModule,
    UserAccountModule,
  ],
  declarations: [],
  exports: [
    UserAccountSettingsModule,
    UserActivityModule,
    UserAccountModule,
  ]
})
export class UserManagmentModule { }
