import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmusementComponent } from './amusement.component';

describe('AmusementComponent', () => {
  let component: AmusementComponent;
  let fixture: ComponentFixture<AmusementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmusementComponent]
    });
    fixture = TestBed.createComponent(AmusementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
