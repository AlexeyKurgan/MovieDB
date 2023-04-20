import { Component, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mdb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class MdbButtonComponent implements OnInit {
  @Input() type: string = 'button';
  @Input() btnClasses!: string;
  @Input() text: string = '';
  @Input() isVisibleText: boolean = false;
  @Input() isIconVisible: boolean = false;
  @Input() iconClass: string = '';
  @Input() disabled = false;
  @Input() rowReverse = false;

  constructor() { }
  
  @HostBinding('class.disabled') 
  get isDisabledClassExists() {
    return this.disabled;
  }
  
  ngOnInit() {

  }

}
