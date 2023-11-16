import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeacherhdComponent } from './update-teacherhd.component';

describe('UpdateTeacherhdComponent', () => {
  let component: UpdateTeacherhdComponent;
  let fixture: ComponentFixture<UpdateTeacherhdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTeacherhdComponent]
    });
    fixture = TestBed.createComponent(UpdateTeacherhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
