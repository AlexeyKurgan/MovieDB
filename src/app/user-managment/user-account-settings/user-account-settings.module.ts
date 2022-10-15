// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountSettingsRoutingModule } from './user-account-settings.routing.module';
// components
import { MainComponentComponent } from './main-component/main-component.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  imports: [
    CommonModule,
    UserAccountSettingsRoutingModule
  ],
  declarations: [
    MainComponentComponent,
    FeedbackComponent,
  ],
  exports: [
    MainComponentComponent,
    FeedbackComponent
  ]
})
export class UserAccountSettingsModule { }
