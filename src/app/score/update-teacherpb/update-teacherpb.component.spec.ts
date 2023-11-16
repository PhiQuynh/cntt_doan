import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeacherpbComponent } from './update-teacherpb.component';

describe('UpdateTeacherpbComponent', () => {
  let component: UpdateTeacherpbComponent;
  let fixture: ComponentFixture<UpdateTeacherpbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTeacherpbComponent]
    });
    fixture = TestBed.createComponent(UpdateTeacherpbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
