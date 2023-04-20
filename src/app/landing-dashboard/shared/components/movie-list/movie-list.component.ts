import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  isGridSwitching: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getColumnsGrid () {
    this.isGridSwitching = !this.isGridSwitching;
  }

}
