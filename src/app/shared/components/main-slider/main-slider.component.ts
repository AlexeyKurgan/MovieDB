import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { MainSliderConfigService } from '../../services/slider-configs/main-slider-config.service.';

@Component({
  selector: 'main-slider',
  templateUrl: './main-slider.component.html',
})
export class MainSliderComponent implements OnInit, AfterViewInit {
  mainSliderConfig: any;

  constructor(
      private mainSliderSwiperConfig: MainSliderConfigService,
    ) {
      this.mainSliderConfig = this.mainSliderSwiperConfig.getConfig()
     }

  ngOnInit() {
    this.mainSliderSwiperConfig.checkAndUpdateConfig()
  }

  ngAfterViewInit() {
  }
}
