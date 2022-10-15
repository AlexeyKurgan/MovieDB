// modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// components
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class UserAccountRoutingModule { }