import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTitleComponent } from './update-title.component';

describe('UpdateTitleComponent', () => {
  let component: UpdateTitleComponent;
  let fixture: ComponentFixture<UpdateTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTitleComponent]
    });
    fixture = TestBed.createComponent(UpdateTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
