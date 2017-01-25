/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CharitableComponent } from './charitable.component';

describe('CharitableComponent', () => {
  let component: CharitableComponent;
  let fixture: ComponentFixture<CharitableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharitableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
