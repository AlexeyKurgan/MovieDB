import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { MovieDataService } from '../../services/movies/movie-data.service';
import { MainSliderConfigService } from '../../services/slider-configs/main-slider-config.service.';

@Component({
  selector: 'main-slider',
  templateUrl: './main-slider.component.html',
})
export class MainSliderComponent implements OnInit {
  mainSliderConfig: any;
  upcomingMoviesSlides: any[] = [];
  upcomingMoviesSubscription!: Subscription;
  backdropUrl: string = 'https://www.themoviedb.org/t/p/w1280';

  constructor(
      private mainSliderSwiperConfig: MainSliderConfigService,
      private moviesDataService: MovieDataService,
    ) {
      this.mainSliderConfig = this.mainSliderSwiperConfig.getConfig()
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
    
    this.mainSliderSwiperConfig.checkAndUpdateConfig()
  }

 ngOnDestroy() {
  if(this.upcomingMoviesSubscription) {
    this.upcomingMoviesSubscription.unsubscribe();
  }
 }

}
