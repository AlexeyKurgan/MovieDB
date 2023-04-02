import { Injectable } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';


@Injectable({
  providedIn: 'root'
})
export class HomeSliderConfigService {
  data: any;

  private config: SwiperOptions = {
    effect: 'slide',
    speed: 900,
    slidesPerView: 6,
    spaceBetween: 15,
    slidesPerGroup: 6,
    navigation: true,    
    pagination: {
      clickable: false,
      enabled: false
    },
    centeredSlides: false, 
  }

  constructor() {
    this.data = {
        'config': this.config
    }
  }

  getConfig() {
    return this.data.config;
  }

  checkAndUpdateConfig() {}
}