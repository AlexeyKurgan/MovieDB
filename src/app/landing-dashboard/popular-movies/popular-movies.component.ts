import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  title: string = 'Popular Movies';

  constructor() { }

  ngOnInit() {
  }

}
