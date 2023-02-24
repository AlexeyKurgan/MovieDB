import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movieDB';
  isHomePage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => {
        const re: RegExp = /(^\/)|(home)|(\/*[a-z])/g; 
        let homeUrl = e.url.match(re)?.join('');
        let result = homeUrl?.startsWith('\/home') || homeUrl === '\/'? true: false;
        return result;
      })
    ).subscribe(homeUrl => {
      console.log('app')
      this.isHomePage = homeUrl;
      return this.isHomePage;
    })
  }
}
