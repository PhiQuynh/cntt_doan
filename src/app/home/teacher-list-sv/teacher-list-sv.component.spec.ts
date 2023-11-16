import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListSvComponent } from './teacher-list-sv.component';

describe('TeacherListSvComponent', () => {
  let component: TeacherListSvComponent;
  let fixture: ComponentFixture<TeacherListSvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherListSvComponent]
    });
    fixture = TestBed.createComponent(TeacherListSvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
