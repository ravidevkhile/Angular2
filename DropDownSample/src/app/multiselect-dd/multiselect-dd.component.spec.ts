/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultiselectDDComponent } from './multiselect-dd.component';

describe('MultiselectDDComponent', () => {
  let component: MultiselectDDComponent;
  let fixture: ComponentFixture<MultiselectDDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectDDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
