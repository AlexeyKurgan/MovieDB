import { Injectable } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Injectable({
  providedIn: 'root'
})
export class MainSliderConfigService {
  data: any;

  private config: SwiperOptions = {
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      clickable: false,
      enabled: false
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      1024: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      1280: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    }
  }

  constructor() {
    this.data = {
      'config': this.config
    }
  }

  getConfig() {
    return this.data.config;
  }

  checkAndUpdateConfig() {
    // if (window.innerWidth <= 1280 && window.innerWidth > 1024) {
    //   this.config.slidesPerView = 2;
    //   this.config.slidesPerGroup = 2;
    // } else if (window.innerWidth <= 1024) {
    //   this.config.slidesPerView = 1;
    //   this.config.slidesPerGroup = 1;
    // } else {
    //   this.config.slidesPerView = 1;
    //   this.config.slidesPerGroup = 1;
    // }
  }
}
