import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [
    // components
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
})
export class CommonModule { }
