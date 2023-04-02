import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  title: string = 'Top Rated';

  constructor() { }

  ngOnInit() {
  }

}
