//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration.routing.module.ts.routing'

// Components
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
  ],
  exports: [
    LoginComponent,
    ResetPasswordComponent
  ],
})
export class RegistrationModule { }
