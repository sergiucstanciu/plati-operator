import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipuriTaxeNedebitateComponent } from './tipuri-taxe-nedebitate.component';

describe('TipuriTaxeNedebitateComponent', () => {
  let component: TipuriTaxeNedebitateComponent;
  let fixture: ComponentFixture<TipuriTaxeNedebitateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipuriTaxeNedebitateComponent]
    });
    fixture = TestBed.createComponent(TipuriTaxeNedebitateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
