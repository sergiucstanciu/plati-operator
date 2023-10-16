import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterogariPlatiComponent } from './interogari-plati.component';

describe('InterogariPlatiComponent', () => {
  let component: InterogariPlatiComponent;
  let fixture: ComponentFixture<InterogariPlatiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterogariPlatiComponent]
    });
    fixture = TestBed.createComponent(InterogariPlatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
