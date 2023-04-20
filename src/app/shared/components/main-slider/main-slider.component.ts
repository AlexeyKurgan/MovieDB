
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { Swiper } from 'swiper';
import { MovieDataService } from '../../services/movies/movie-data.service';
import { HomeScreenSlidersConfigService } from './../../services/slider-configs/home-screen-sliders-config.service';

@Component({
  selector: 'main-slider',
  templateUrl: './main-slider.component.html',
})
export class MainSliderComponent implements OnInit, AfterViewInit {
  upcomingMoviesSubscription!: Subscription;

  mainSlider!: Swiper;
  secondarySlider!: Swiper;
 
  mainSliderConfig: any;
  upNextSliderConfig: any;

  upcomingMoviesSlides: any[] = [];

  backdropUrl: string = 'https://www.themoviedb.org/t/p/w1280';

  constructor(
    private homeScreenSwiperConfig: HomeScreenSlidersConfigService,
    private moviesDataService: MovieDataService,
  ) {
    this.mainSliderConfig = this.homeScreenSwiperConfig.getMainSliderConfig();
    this.upNextSliderConfig = this.homeScreenSwiperConfig.getUpNextSliderConfig();
  }

  ngOnInit() {
    this.upcomingMoviesSubscription = this.moviesDataService.getUpcomingMovies().subscribe(
      {
        next: (data) => {
          this.upcomingMoviesSlides = data.results;
        },
        error: (err: any) => {
          console.error(err);
          return of(null)
        }
      }
    )
  }

  ngAfterViewInit() {
    this.mainSlider = new Swiper('.main', this.mainSliderConfig);
    this.secondarySlider = new Swiper('.secondary', this.upNextSliderConfig);

    this.mainSlider.controller.control = this.secondarySlider;
    this.secondarySlider.controller.control = this.mainSlider;
  }

  swiperSlidePrev() {
    this.mainSlider.slidePrev();
  }

  swiperSlideNext() {
    this.mainSlider.slideNext();
  }

  ngOnDestroy() {
    if (this.upcomingMoviesSubscription) {
      this.upcomingMoviesSubscription.unsubscribe();
    }
  }

}
