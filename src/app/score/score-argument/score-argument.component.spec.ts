import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreArgumentComponent } from './score-argument.component';

describe('ScoreArgumentComponent', () => {
  let component: ScoreArgumentComponent;
  let fixture: ComponentFixture<ScoreArgumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreArgumentComponent]
    });
    fixture = TestBed.createComponent(ScoreArgumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
