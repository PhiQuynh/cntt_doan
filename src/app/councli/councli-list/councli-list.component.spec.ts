import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncliListComponent } from './councli-list.component';

describe('CouncliListComponent', () => {
  let component: CouncliListComponent;
  let fixture: ComponentFixture<CouncliListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouncliListComponent]
    });
    fixture = TestBed.createComponent(CouncliListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
