import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map, Subject } from 'rxjs';

@Component({
  selector: 'upcoming-main',
  templateUrl: './upcoming-main.component.html',
})
export class UpcomingMainComponent implements OnInit {
  isUpcomingPage: boolean = false;
  urlString: string = '/home/upcoming';
 
  constructor(private router: Router) {}

  ngOnInit() {
    this.compareUrl(this.urlString);
  }

  compareUrl(url:string):void {
    if(this.router.url === url) {
      this.isUpcomingPage = true;
    }else {
      this.isUpcomingPage = false
    }
  }
}
