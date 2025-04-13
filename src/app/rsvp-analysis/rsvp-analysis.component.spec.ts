import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpAnalysisComponent } from './rsvp-analysis.component';

describe('RsvpAnalysisComponent', () => {
  let component: RsvpAnalysisComponent;
  let fixture: ComponentFixture<RsvpAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsvpAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsvpAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
