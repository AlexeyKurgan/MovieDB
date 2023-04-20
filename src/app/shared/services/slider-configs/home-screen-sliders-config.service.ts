import { Injectable } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Injectable({
  providedIn: 'root'
})
export class HomeScreenSlidersConfigService {
  dataUpNextSlider: any;
  dataMainSlider: any;

  private mainSliderConfig: SwiperOptions = {
    effect: 'fade',
    slidesPerView: 1,
    initialSlide: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.button-next .sw-main',
      prevEl: '.button-prev .sw-main',
    },
    centeredSlides: true,
    loop: false,
  }

  private upNextSliderConfig: SwiperOptions = {
    effect: 'fade',
    slidesPerView: 3,
    initialSlide: 1,
    spaceBetween: 0,
    direction: 'vertical',
    navigation: false,
    simulateTouch: false,
    loop: false,
    pagination: {
      clickable: false,
      enabled: false
    },
  }

  constructor() {
    this.dataMainSlider = {
        'config': this.mainSliderConfig
    }

    this.dataUpNextSlider = {
        'config': this.upNextSliderConfig
    }
  }

  getUpNextSliderConfig() {
      return this.dataUpNextSlider.config;
  }

  getMainSliderConfig() {
      return this.dataMainSlider.config;
  }

  checkAndUpdateConfig() {}

}
