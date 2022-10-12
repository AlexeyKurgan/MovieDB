import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  name: string = 'Alexey Kurgan';
  technology: {
    link: string,
    title: string
  }[] = [
      {
        link: 'https://angular.io/',
        title: 'Angular'
      },
      {
        link: 'https://material.angular.io/',
        title: 'Material Angular'
      },
      {
        link: 'https://rxjs.dev/',
        title: 'RxJs'
      },
      {
        link: 'https://www.typescriptlang.org/',
        title: 'TypeScript'
      },
      {
        link: 'https://valor-software.com/ngx-bootstrap/#/',
        title: 'NgxBootstrap'
      },
    ]
  githubLink: string = 'https://github.com/AlexeyKurgan/MovieDB/branches';

  constructor() { }

  ngOnInit() {
  }

}
