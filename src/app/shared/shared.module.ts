// import modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// ngx-bootstrap modules
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

// swiper module
import { SwiperModule } from 'swiper/angular';

// // import Swiper core and required modules
import SwiperCore, 
  {   
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Virtual,
    Zoom,
    Autoplay,
    Thumbs,
    Controller, 
  } from 'swiper';

// install Swiper modules
SwiperCore.use([
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Virtual,
    Zoom,
    Autoplay,
    Thumbs,
    Controller
]);

// material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

// declarations components
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { HomeSliderItemsComponent } from './components/home-slider-items/home-slider-items.component';
import { ButtonComponent } from './components/button/button.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchComponent } from './components/search/search.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { MainLogoComponent } from './components/main-logo/main-logo.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CommonPopupComponent } from './services/popup-service/common-popup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
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
    MatDialogModule,
  ],
  declarations:[
    MainLogoComponent,
    MainSliderComponent,
    HomeSliderItemsComponent,
    ButtonComponent,
    PaginatorComponent,
    SearchComponent,
    UserMenuComponent,
    SpinnerComponent,
    CommonPopupComponent,
  ],
  exports:[
    // Modules
    CommonModule,
    MatSidenavModule,

    // Components
    MainSliderComponent,
    HomeSliderItemsComponent,
    ButtonComponent,
    PaginatorComponent,
    SearchComponent,
    UserMenuComponent,
    MainLogoComponent,
    SpinnerComponent,
    CommonPopupComponent
  ]
})
export class SharedModule { }
