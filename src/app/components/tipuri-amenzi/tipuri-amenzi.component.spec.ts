import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipuriAmenziComponent } from './tipuri-amenzi.component';

describe('TipuriAmenziComponent', () => {
  let component: TipuriAmenziComponent;
  let fixture: ComponentFixture<TipuriAmenziComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipuriAmenziComponent]
    });
    fixture = TestBed.createComponent(TipuriAmenziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
