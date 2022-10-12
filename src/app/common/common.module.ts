import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    // dashboard implement
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
})
export class CommonModule { }
