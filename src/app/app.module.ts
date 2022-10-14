import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { LandingDashboardModule } from './landing-dashboard/landing-dashboard.module';
import { UserManagmentModule } from './user-managment/user-managment.module';

// check this module why he didn't work in app module
// import { SharedModule } from './shared/shared.module'; 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    CommonModule,
    LandingDashboardModule,
    UserManagmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
