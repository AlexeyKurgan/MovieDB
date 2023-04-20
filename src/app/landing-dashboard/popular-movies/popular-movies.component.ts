import { Component, OnInit } from '@angular/core';
import { CompareUrlService } from '../shared/services/compare-url.service';

@Component({
  selector: 'popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  isPopularGridItems!: boolean;
  title: string = 'Popular Movies';

  constructor(private ulrCompare: CompareUrlService) { }

  ngOnInit() {
    this.ulrCompare.compareUrl('/home/popular');
    this.isPopularGridItems = this.ulrCompare.getCompareUrl()
  }

}
