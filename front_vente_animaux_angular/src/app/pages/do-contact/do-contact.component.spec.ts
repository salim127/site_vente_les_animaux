import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoContactComponent } from './do-contact.component';

describe('DoContactComponent', () => {
  let component: DoContactComponent;
  let fixture: ComponentFixture<DoContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoContactComponent]
    });
    fixture = TestBed.createComponent(DoContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });






});

