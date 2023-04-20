import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompareUrlService {

private isGridTemplate: boolean = false;

constructor(private router: Router) { }

compareUrl(url: string = '') {
  if(this.router.url === url) {
    this.isGridTemplate = true;
  }else {
    this.isGridTemplate = false;
  }
}

getCompareUrl() {
    return this.isGridTemplate;
}

}


