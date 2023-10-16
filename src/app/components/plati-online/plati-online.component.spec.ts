import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatiOnlineComponent } from './plati-online.component';

describe('PlatiOnlineComponent', () => {
  let component: PlatiOnlineComponent;
  let fixture: ComponentFixture<PlatiOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatiOnlineComponent]
    });
    fixture = TestBed.createComponent(PlatiOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
