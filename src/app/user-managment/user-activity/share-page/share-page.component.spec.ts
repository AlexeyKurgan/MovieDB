/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SharePageComponent } from './share-page.component';

describe('SharePageComponent', () => {
  let component: SharePageComponent;
  let fixture: ComponentFixture<SharePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
