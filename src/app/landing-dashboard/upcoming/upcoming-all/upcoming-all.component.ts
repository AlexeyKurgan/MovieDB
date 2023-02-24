import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upcoming-all',
  templateUrl: './upcoming-all.component.html',
  styleUrls: ['./upcoming-all.component.scss']
})
export class UpcomingAllComponent implements OnInit {
  isGridSwitching: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getColumnsGrid () {
    this.isGridSwitching = !this.isGridSwitching;
  }
}
