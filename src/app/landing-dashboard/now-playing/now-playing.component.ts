import { Component, OnInit } from '@angular/core';
import { CompareUrlService } from './../shared/services/compare-url.service';

@Component({
  selector: 'now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
  title: string = 'Now Playing Movies';
  isNowPlayingGridItems!: boolean;

  constructor(private urlCompare: CompareUrlService) { }

  ngOnInit() {
    this.urlCompare.compareUrl('/home/now-playing');
    this.isNowPlayingGridItems = this.urlCompare.getCompareUrl()
  }

}
