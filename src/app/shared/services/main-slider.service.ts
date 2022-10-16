import { Injectable } from '@angular/core';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Injectable({
  providedIn: 'root'
})
export class MainSliderService {

  // data: any;

  // private config: SwiperConfigInterface = {
  //     direction: 'horizontal',
  //     slidesPerView: 4,
  //     slidesPerGroup: 4,
  //     simulateTouch: false,
  //     navigation: {
  //         nextEl: '.swiper-button-next',
  //         prevEl: '.swiper-button-prev',
  //     }
  // };

  // constructor() {
  //     this.data = {
  //         'config': this.config
  //     }
  // }

  // getConfig() {
  //     return this.data.config;
  // }

  // checkAndUpdateConfig() {
  //     if (window.innerWidth <= 1280 && window.innerWidth > 1024) {
  //         this.config.slidesPerView = 2;
  //         this.config.slidesPerGroup = 2;
  //     } else if (window.innerWidth <= 1024) {
  //         this.config.slidesPerView = 1;
  //         this.config.slidesPerGroup = 1;
  //     } else {
  //         this.config.slidesPerView = 4;
  //         this.config.slidesPerGroup = 4;
  //     }
  // }

}
