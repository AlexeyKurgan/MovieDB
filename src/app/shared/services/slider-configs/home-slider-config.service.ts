import { Injectable } from '@angular/core';
import { SwiperOptions } from 'swiper';


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
    navigation: {
      nextEl: '.button-next .sw-home',
      prevEl: '.button-prev .sw-home',
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