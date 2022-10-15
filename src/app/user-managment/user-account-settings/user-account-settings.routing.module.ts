// modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// components
import { MainComponentComponent } from "./main-component/main-component.component";

const routes: Routes = [
  { path:'', component: MainComponentComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class UserAccountSettingsRoutingModule { }