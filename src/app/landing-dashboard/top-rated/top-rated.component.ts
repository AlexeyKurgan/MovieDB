import { Component, OnInit } from '@angular/core';
import { CompareUrlService } from '../shared/services/compare-url.service';

@Component({
  selector: 'top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  isTopRatedGridItems!:boolean;
  title: string = 'Top Rated';
 
  constructor(private ulrCompare: CompareUrlService) { }

  ngOnInit() {
    this.ulrCompare.compareUrl('/home/top-rated');
    this.isTopRatedGridItems = this.ulrCompare.getCompareUrl()
  }

}
