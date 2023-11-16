import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterAddComponent } from './mater-add.component';

describe('MaterAddComponent', () => {
  let component: MaterAddComponent;
  let fixture: ComponentFixture<MaterAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterAddComponent]
    });
    fixture = TestBed.createComponent(MaterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
