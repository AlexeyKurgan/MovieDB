import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAccountSettingsModule } from './user-account-settings/user-account-settings.module';
import { UserAccountModule } from './user-account/user-account.module';
import { UserActivityModule } from './user-activity/user-activity.module';
import { UserManagmentRoutingModule } from './user-managment.routing,module';

@NgModule({
  imports: [
    RouterModule,
    UserManagmentRoutingModule,
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
