import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListSvPbComponent } from './teacher-list-sv-pb.component';

describe('TeacherListSvPbComponent', () => {
  let component: TeacherListSvPbComponent;
  let fixture: ComponentFixture<TeacherListSvPbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherListSvPbComponent]
    });
    fixture = TestBed.createComponent(TeacherListSvPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
