import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeNedebitateAchitateComponent } from './taxe-nedebitate-achitate.component';

describe('TaxeNedebitateAchitateComponent', () => {
  let component: TaxeNedebitateAchitateComponent;
  let fixture: ComponentFixture<TaxeNedebitateAchitateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxeNedebitateAchitateComponent]
    });
    fixture = TestBed.createComponent(TaxeNedebitateAchitateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
