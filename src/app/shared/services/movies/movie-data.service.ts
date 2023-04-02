import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieType } from '../../enums/movie-type';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private baseUrl = 'https://api.themoviedb.org/3/movie/';
  private apiKey = '91938efbada1845dd2632a4f455463ed';

  constructor(@Inject(HttpClient) private http: HttpClient) {}
  
  getPopularMovies(): Observable<any> {
    return this.getTypeMoviesUrl(MovieType.Popular);
  }

  getUpcomingMovies(): Observable<any> {
    return this.getTypeMoviesUrl(MovieType.Upcoming);
  }

  getNowPlayingMovies(): Observable<any> {
    return this.getTypeMoviesUrl(MovieType.NowPlaying);
  }

  getLatestMovies(): Observable<any> {
    return this.getTypeMoviesUrl(MovieType.Latest);
  }

  getTopRatedMovies(): Observable<any> {
    return this.getTypeMoviesUrl(MovieType.TopRated);
  }

  // get url
  getTypeMoviesUrl(movieType:string) {
    const url = `${this.baseUrl}${movieType}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get<any>(url);
  }
}
