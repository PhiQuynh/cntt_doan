import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSvNoComponent } from './list-sv-no.component';

describe('ListSvNoComponent', () => {
  let component: ListSvNoComponent;
  let fixture: ComponentFixture<ListSvNoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSvNoComponent]
    });
    fixture = TestBed.createComponent(ListSvNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
