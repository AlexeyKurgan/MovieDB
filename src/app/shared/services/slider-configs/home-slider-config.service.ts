import { Injectable } from '@angular/core';
import { SwiperOptions } from 'swiper';


@Injectable({
  providedIn: 'root'
})
export class HomeSliderConfigService {
  data: any;

  private config: SwiperOptions = {
    effect: 'coverflow',
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: true,    
    pagination: {
      clickable: false,
      enabled: false
    },
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
          slidesPerGroup: 1
      },
      1024: {
          slidesPerView: 2,
          slidesPerGroup: 2
      },
      1280: {
          slidesPerView: 4,
          slidesPerGroup: 4
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

  checkAndUpdateConfig() {}
}