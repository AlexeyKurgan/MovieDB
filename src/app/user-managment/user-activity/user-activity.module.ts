// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserActivityRoutingModule } from './user-activity.routing.module';

// components
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MainComponentComponent } from './main-component/main-component.component';

// components

@NgModule({
  imports: [
    CommonModule,
    UserActivityRoutingModule
  ],
  declarations: [
    MainComponentComponent,
    EditProfileComponent
  ],
  exports: [
    MainComponentComponent,
    EditProfileComponent
  ],
})
export class UserActivityModule { }
