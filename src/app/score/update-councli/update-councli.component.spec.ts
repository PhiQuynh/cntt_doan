import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCouncliComponent } from './update-councli.component';

describe('UpdateCouncliComponent', () => {
  let component: UpdateCouncliComponent;
  let fixture: ComponentFixture<UpdateCouncliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCouncliComponent]
    });
    fixture = TestBed.createComponent(UpdateCouncliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
