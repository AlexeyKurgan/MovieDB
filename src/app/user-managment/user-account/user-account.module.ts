import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountRoutingModule } from './user-account.routing.module';

// components
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    UserAccountRoutingModule
  ],
  declarations: [
    LoginComponent,
    ResetPasswordComponent
  ],
  exports: [
    LoginComponent,
    ResetPasswordComponent
  ]
})
export class UserAccountModule { }
