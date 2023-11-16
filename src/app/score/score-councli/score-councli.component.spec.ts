import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCouncliComponent } from './score-councli.component';

describe('ScoreCouncliComponent', () => {
  let component: ScoreCouncliComponent;
  let fixture: ComponentFixture<ScoreCouncliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreCouncliComponent]
    });
    fixture = TestBed.createComponent(ScoreCouncliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
