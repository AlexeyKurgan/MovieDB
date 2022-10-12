import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  isExpanded: boolean = false;

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.isExpanded = true;
    this.cd.detectChanges()
  }

  ngOnInit() {
  }


}
