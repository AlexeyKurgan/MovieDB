// import modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ngx-bootstrap modules
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

// swiper module
import { SwiperModule } from 'swiper/angular';

// material modules
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';

// declarations components
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { ButtonComponent } from './components/button/button.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchComponent } from './components/search/search.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { MainLogoComponent } from './components/main-logo/main-logo.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // swiper
    SwiperModule,
    // ngx-bootstrap
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    // material
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatMenuModule,
  
  ],
  declarations:[
    MainLogoComponent,
    MainSliderComponent,
    ButtonComponent,
    PaginatorComponent,
    SearchComponent,
    UserMenuComponent,
  ],
  exports:[
    // Modules
    CommonModule,
    MatSidenavModule,

    // Components
    MainSliderComponent,
    ButtonComponent,
    PaginatorComponent,
    SearchComponent,
    UserMenuComponent,
    MainLogoComponent,
  ]
})
export class SharedModule { }
