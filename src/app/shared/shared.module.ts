// import modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngx-bootstrap modules
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';

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

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    // ngx-bootstrap
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
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
    MainSliderComponent,
    ButtonComponent,
    PaginatorComponent,
    SearchComponent,
    UserMenuComponent,
  ],
  exports:[
    MainSliderComponent,
    ButtonComponent,
    PaginatorComponent,
    SearchComponent,
    UserMenuComponent,
  ]
})
export class SharedModule { }
