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

// declarations components
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { ButtonComponent } from './components/button/button.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

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
  ],
  declarations:[
    MainSliderComponent,
    ButtonComponent,
    PaginatorComponent,
  ],
  exports:[
    MainSliderComponent,
    ButtonComponent,
    PaginatorComponent,
  ]
})
export class SharedModule { }
