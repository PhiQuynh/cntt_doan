import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncliListTeacherComponent } from './councli-list-teacher.component';

describe('CouncliListTeacherComponent', () => {
  let component: CouncliListTeacherComponent;
  let fixture: ComponentFixture<CouncliListTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouncliListTeacherComponent]
    });
    fixture = TestBed.createComponent(CouncliListTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
