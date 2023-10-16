import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenziAchitateComponent } from './amenzi-achitate.component';

describe('AmenziAchitateComponent', () => {
  let component: AmenziAchitateComponent;
  let fixture: ComponentFixture<AmenziAchitateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmenziAchitateComponent]
    });
    fixture = TestBed.createComponent(AmenziAchitateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
