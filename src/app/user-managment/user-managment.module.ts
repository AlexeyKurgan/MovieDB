import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAccountSettingsModule } from './user-account-settings/user-account-settings.module';
import { UserActivityModule } from './user-activity/user-activity.module';
import { UserManagmentRoutingModule } from './user-managment.routing,module';

// Components
import { UserManagmentComponent } from './components/user-managment/user-managment.component';

@NgModule({
  imports: [
    RouterModule,
    UserManagmentRoutingModule,
    UserAccountSettingsModule,
    UserActivityModule,
  ],
  declarations: [
    UserManagmentComponent
  ],
  exports: [
    UserAccountSettingsModule,
    UserActivityModule,
  ]
})
export class UserManagmentModule { }
