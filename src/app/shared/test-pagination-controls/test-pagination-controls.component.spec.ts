import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaginationControlsComponent } from './test-pagination-controls.component';

describe('TestPaginationControlsComponent', () => {
  let component: TestPaginationControlsComponent;
  let fixture: ComponentFixture<TestPaginationControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPaginationControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaginationControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
