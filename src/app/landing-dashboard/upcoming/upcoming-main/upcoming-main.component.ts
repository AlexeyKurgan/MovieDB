import { Component, OnInit } from '@angular/core';
import { CompareUrlService } from '../../shared/services/compare-url.service';

@Component({
  selector: 'upcoming-main',
  templateUrl: './upcoming-main.component.html',
})
export class UpcomingMainComponent implements OnInit {
  isUpcomingGridItems!: boolean;
  title: string = 'Upcoming Movies';

  constructor(private ulrCompare: CompareUrlService) {}

  ngOnInit() {
    this.ulrCompare.compareUrl('/home/upcoming');
    this.isUpcomingGridItems = this.ulrCompare.getCompareUrl()
  }
}
