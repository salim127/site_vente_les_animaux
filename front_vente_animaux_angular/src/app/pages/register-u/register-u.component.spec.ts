import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUComponent } from './register-u.component';

describe('RegisterUComponent', () => {
  let component: RegisterUComponent;
  let fixture: ComponentFixture<RegisterUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUComponent]
    });
    fixture = TestBed.createComponent(RegisterUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
