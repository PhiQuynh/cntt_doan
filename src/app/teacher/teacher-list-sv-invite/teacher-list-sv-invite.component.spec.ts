import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListSvInviteComponent } from './teacher-list-sv-invite.component';

describe('TeacherListSvInviteComponent', () => {
  let component: TeacherListSvInviteComponent;
  let fixture: ComponentFixture<TeacherListSvInviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherListSvInviteComponent]
    });
    fixture = TestBed.createComponent(TeacherListSvInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
