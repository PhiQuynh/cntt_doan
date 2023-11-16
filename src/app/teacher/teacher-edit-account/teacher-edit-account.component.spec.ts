import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditAccountComponent } from './teacher-edit-account.component';

describe('TeacherEditAccountComponent', () => {
  let component: TeacherEditAccountComponent;
  let fixture: ComponentFixture<TeacherEditAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherEditAccountComponent]
    });
    fixture = TestBed.createComponent(TeacherEditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
