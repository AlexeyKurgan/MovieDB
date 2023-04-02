import { Observable, of } from 'rxjs';
import { AfterViewInit, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MovieDataService } from './../../services/movies/movie-data.service';
import { HomeSliderConfigService } from './../../services/slider-configs/home-slider-config.service';
import { CommonPopupService } from '../../services/popup-service/common-popup.service';

@Component({
  selector: 'home-slider-items',
  templateUrl: './home-slider-items.component.html',
})
export class HomeSliderItemsComponent implements OnInit {
  @Input() movieType!: string;
  movies: any[] = [];
  posterUrl: string = 'https://www.themoviedb.org/t/p/w342';
  homeSliderConfig: any;
  
  constructor(
      private moviesDataService: MovieDataService,
      private homeSliderSwiperConfig: HomeSliderConfigService,
      private popupService: CommonPopupService,
      ) { 
      this.homeSliderConfig = this.homeSliderSwiperConfig.getConfig();
  }

  ngOnInit() {
    this.getMovie();
    this.homeSliderSwiperConfig.checkAndUpdateConfig();
  }

  getMovie() {
    try {
      switch (this.movieType) {
        case 'popular':
          const popularMovies = this.getMoviesData(this.moviesDataService.getPopularMovies());
          this.handleMovieData(this.movieType, popularMovies);
          break;
        case 'upcoming':
          const upcomingMovies = this.getMoviesData(this.moviesDataService.getUpcomingMovies());
          this.handleMovieData(this.movieType, upcomingMovies);
          break;
        case 'now_playing':
          const nowPlaying = this.getMoviesData(this.moviesDataService.getNowPlayingMovies());
          this.handleMovieData(this.movieType, nowPlaying);
          break;
        case 'latest':
          const latestMovies = this.getMoviesData(this.moviesDataService.getLatestMovies());
          this.handleMovieData(this.movieType, latestMovies);
          break;
        case 'top_rated':
          const topRated = this.getMoviesData(this.moviesDataService.getTopRatedMovies());
          this.handleMovieData(this.movieType, topRated);
          break;
      }
    } catch (error: any) {
      console.log('Error:', error.message)
    }
  }

  getMoviesData(observable: Observable<any>) {
    observable.subscribe(
      {
        next: (data) => {
          this.movies = data.results;
        },
        error: (err: any) => {
          console.error(err);
          return of(null)
        }
      }
    )
  }

  handleMovieData(movieType:string, moviesData$: any) {
    if (!moviesData$) {
      console.log(`Error: ${movieType} data is ${moviesData$}`)
    } else {
      this.getMoviesData(moviesData$)
    }
  }

  showWatchListPopup () {
    this.popupService.componentBasedPopup();
  }

}
