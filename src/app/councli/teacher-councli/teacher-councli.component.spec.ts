import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCouncliComponent } from './teacher-councli.component';

describe('TeacherCouncliComponent', () => {
  let component: TeacherCouncliComponent;
  let fixture: ComponentFixture<TeacherCouncliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherCouncliComponent]
    });
    fixture = TestBed.createComponent(TeacherCouncliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
