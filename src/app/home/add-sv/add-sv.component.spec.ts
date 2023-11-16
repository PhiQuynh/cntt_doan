import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSvComponent } from './add-sv.component';

describe('AddSvComponent', () => {
  let component: AddSvComponent;
  let fixture: ComponentFixture<AddSvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSvComponent]
    });
    fixture = TestBed.createComponent(AddSvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
