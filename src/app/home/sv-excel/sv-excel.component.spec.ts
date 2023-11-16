import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvExcelComponent } from './sv-excel.component';

describe('SvExcelComponent', () => {
  let component: SvExcelComponent;
  let fixture: ComponentFixture<SvExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvExcelComponent]
    });
    fixture = TestBed.createComponent(SvExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
