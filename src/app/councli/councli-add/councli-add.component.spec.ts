import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncliAddComponent } from './councli-add.component';

describe('CouncliAddComponent', () => {
  let component: CouncliAddComponent;
  let fixture: ComponentFixture<CouncliAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouncliAddComponent]
    });
    fixture = TestBed.createComponent(CouncliAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
